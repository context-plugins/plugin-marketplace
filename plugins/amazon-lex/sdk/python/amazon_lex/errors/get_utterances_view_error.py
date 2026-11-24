from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException

GetUtterancesViewErrorBody: TypeAlias = (
    BadRequestException | LimitExceededException | InternalFailureException | RawError
)


@dataclass(frozen=True, slots=True)
class _GetUtterancesViewError:
    def map(self, status_code: int, content: bytes) -> GetUtterancesViewErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 429:
                return decode_json[LimitExceededException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


get_utterances_view_error_mapper: Final[ErrorMapper[GetUtterancesViewErrorBody]] = _GetUtterancesViewError()
