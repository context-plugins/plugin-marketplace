from __future__ import annotations

from typing import TypeAlias

from ..decision_engine_message import DecisionEngineMessage, DecisionEngineMessageDict
from ..enums.internal_server_error import InternalServerErrorOrStr
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

DecisionEngineFlowMessagesResponse11: TypeAlias = DecisionEngineMessage | ValidateErrorJson | InternalServerErrorOrStr

DecisionEngineFlowMessagesResponse11Dict: TypeAlias = (
    DecisionEngineMessageDict | ValidateErrorJsonDict | InternalServerErrorOrStr
)
