import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function useNavigation() {
  const navigate = useNavigate();

  const goTo = React.useCallback((to) => navigate(to), [navigate]);
  const goBack = React.useCallback(() => navigate(-1), [navigate]);
  const goForward = React.useCallback(() => navigate(1), [navigate]);

  return { goTo, goBack, goForward };
}