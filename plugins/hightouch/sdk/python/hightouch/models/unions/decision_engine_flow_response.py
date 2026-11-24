from __future__ import annotations

from typing import TypeAlias

from ..decision_engine_flow import DecisionEngineFlow, DecisionEngineFlowDict
from ..enums.internal_server_error import InternalServerErrorOrStr
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

DecisionEngineFlowResponse: TypeAlias = DecisionEngineFlow | ValidateErrorJson | InternalServerErrorOrStr

DecisionEngineFlowResponseDict: TypeAlias = DecisionEngineFlowDict | ValidateErrorJsonDict | InternalServerErrorOrStr
