from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.decision_engine_error_response import DecisionEngineErrorResponse
from ..models.unions.decision_engine_flow_messages_clone_response1 import DecisionEngineFlowMessagesCloneResponse1
from ..models.validate_error_json import ValidateErrorJson

CloneMessageErrorBody: TypeAlias = (
    DecisionEngineErrorResponse | ValidateErrorJson | DecisionEngineFlowMessagesCloneResponse1 | RawError
)


@dataclass(frozen=True, slots=True)
class _CloneMessageError:
    def map(self, status_code: int, content: bytes) -> CloneMessageErrorBody:
        match status_code:
            case 401 | 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[DecisionEngineErrorResponse](content)
            case 422:
                return decode_json[ValidateErrorJson](content)
            case 500:
                return decode_json[DecisionEngineFlowMessagesCloneResponse1](content)
            case _:
                return RawError(status_code, content)


clone_message_error_mapper: Final[ErrorMapper[CloneMessageErrorBody]] = _CloneMessageError()
