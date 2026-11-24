from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.decision_engine_error_response import DecisionEngineErrorResponse
from ..models.unions.decision_engine_flow_messages_response14 import DecisionEngineFlowMessagesResponse14

DeleteMessageErrorBody: TypeAlias = DecisionEngineErrorResponse | DecisionEngineFlowMessagesResponse14 | RawError


@dataclass(frozen=True, slots=True)
class _DeleteMessageError:
    def map(self, status_code: int, content: bytes) -> DeleteMessageErrorBody:
        match status_code:
            case 401 | 403:
                return RawError(status_code, content)
            case 404:
                return decode_json[DecisionEngineErrorResponse](content)
            case 500:
                return decode_json[DecisionEngineFlowMessagesResponse14](content)
            case _:
                return RawError(status_code, content)


delete_message_error_mapper: Final[ErrorMapper[DeleteMessageErrorBody]] = _DeleteMessageError()
