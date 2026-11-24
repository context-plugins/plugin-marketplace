from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

IdOfAssetsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _IdOfAssetsError:
    def map(self, status_code: int, content: bytes) -> IdOfAssetsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


id_of_assets_error_mapper: Final[ErrorMapper[IdOfAssetsErrorBody]] = _IdOfAssetsError()
