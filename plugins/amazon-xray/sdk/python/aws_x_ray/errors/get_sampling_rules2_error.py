from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.invalid_request_exception import InvalidRequestException
from ..models.throttled_exception import ThrottledException

GetSamplingRules2ErrorBody: TypeAlias = InvalidRequestException | ThrottledException | RawError


@dataclass(frozen=True, slots=True)
class _GetSamplingRules2Error:
    def map(self, status_code: int, content: bytes) -> GetSamplingRules2ErrorBody:
        match status_code:
            case 400:
                return decode_json[InvalidRequestException](content)
            case 429:
                return decode_json[ThrottledException](content)
            case _:
                return RawError(status_code, content)


get_sampling_rules2_error_mapper: Final[ErrorMapper[GetSamplingRules2ErrorBody]] = _GetSamplingRules2Error()
