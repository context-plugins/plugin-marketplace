from __future__ import annotations

from typing import TypeAlias

from ..decision_engine_error_response import DecisionEngineErrorResponse, DecisionEngineErrorResponseDict
from ..decision_engine_message import DecisionEngineMessage, DecisionEngineMessageDict
from ..enums.internal_server_error import InternalServerErrorOrStr
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

DecisionEngineFlowMessagesCloneResponse: TypeAlias = (
    DecisionEngineMessage | DecisionEngineErrorResponse | ValidateErrorJson | InternalServerErrorOrStr
)

DecisionEngineFlowMessagesCloneResponseDict: TypeAlias = (
    DecisionEngineMessageDict | DecisionEngineErrorResponseDict | ValidateErrorJsonDict | InternalServerErrorOrStr
)
