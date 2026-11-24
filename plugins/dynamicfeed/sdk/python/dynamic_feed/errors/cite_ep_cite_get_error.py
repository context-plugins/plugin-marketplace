from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

CiteEpCiteGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CiteEpCiteGetError:
    def map(self, status_code: int, content: bytes) -> CiteEpCiteGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


cite_ep_cite_get_error_mapper: Final[ErrorMapper[CiteEpCiteGetErrorBody]] = _CiteEpCiteGetError()
