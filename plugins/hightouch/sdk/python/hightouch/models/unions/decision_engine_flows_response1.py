from __future__ import annotations

from typing import TypeAlias

from ..decision_engine_flows_response import DecisionEngineFlowsResponse, DecisionEngineFlowsResponseDict
from ..enums.internal_server_error import InternalServerErrorOrStr
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

DecisionEngineFlowsResponse1: TypeAlias = DecisionEngineFlowsResponse | ValidateErrorJson | InternalServerErrorOrStr

DecisionEngineFlowsResponse1Dict: TypeAlias = (
    DecisionEngineFlowsResponseDict | ValidateErrorJsonDict | InternalServerErrorOrStr
)
