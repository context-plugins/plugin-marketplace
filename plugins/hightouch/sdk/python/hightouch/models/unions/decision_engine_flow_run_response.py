from __future__ import annotations

from typing import TypeAlias

from ..decision_engine_run_response import DecisionEngineRunResponse, DecisionEngineRunResponseDict
from ..enums.internal_server_error import InternalServerErrorOrStr
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

DecisionEngineFlowRunResponse: TypeAlias = DecisionEngineRunResponse | ValidateErrorJson | InternalServerErrorOrStr

DecisionEngineFlowRunResponseDict: TypeAlias = (
    DecisionEngineRunResponseDict | ValidateErrorJsonDict | InternalServerErrorOrStr
)
