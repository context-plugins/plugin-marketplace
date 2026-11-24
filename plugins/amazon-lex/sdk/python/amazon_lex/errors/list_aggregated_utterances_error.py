from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.internal_server_exception import InternalServerException
from ..models.precondition_failed_exception import PreconditionFailedException
from ..models.throttling_exception import ThrottlingException
from ..models.validation_exception import ValidationException

ListAggregatedUtterancesErrorBody: TypeAlias = (
    ValidationException | PreconditionFailedException | ThrottlingException | InternalServerException | RawError
)


@dataclass(frozen=True, slots=True)
class _ListAggregatedUtterancesError:
    def map(self, status_code: int, content: bytes) -> ListAggregatedUtterancesErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationException](content)
            case 412:
                return decode_json[PreconditionFailedException](content)
            case 429:
                return decode_json[ThrottlingException](content)
            case 500:
                return decode_json[InternalServerException](content)
            case _:
                return RawError(status_code, content)


list_aggregated_utterances_error_mapper: Final[
    ErrorMapper[ListAggregatedUtterancesErrorBody]
] = _ListAggregatedUtterancesError()
