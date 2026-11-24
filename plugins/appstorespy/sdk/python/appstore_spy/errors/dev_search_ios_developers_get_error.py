from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.ios_developers401_error1 import IosDevelopers401Error1

DevSearchIosDevelopersGetErrorBody: TypeAlias = IosDevelopers401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _DevSearchIosDevelopersGetError:
    def map(self, status_code: int, content: bytes) -> DevSearchIosDevelopersGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosDevelopers401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


dev_search_ios_developers_get_error_mapper: Final[
    ErrorMapper[DevSearchIosDevelopersGetErrorBody]
] = _DevSearchIosDevelopersGetError()
