from __future__ import annotations

from typing import TypeAlias

from ..decision_engine_flow_messages_response import (
    DecisionEngineFlowMessagesResponse,
    DecisionEngineFlowMessagesResponseDict,
)
from ..enums.internal_server_error import InternalServerErrorOrStr
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

DecisionEngineFlowMessagesResponse1: TypeAlias = (
    DecisionEngineFlowMessagesResponse | ValidateErrorJson | InternalServerErrorOrStr
)

DecisionEngineFlowMessagesResponse1Dict: TypeAlias = (
    DecisionEngineFlowMessagesResponseDict | ValidateErrorJsonDict | InternalServerErrorOrStr
)
