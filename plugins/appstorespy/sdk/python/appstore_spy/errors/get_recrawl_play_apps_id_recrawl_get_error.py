from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_apps_recrawl401_error1 import PlayAppsRecrawl401Error1

GetRecrawlPlayAppsIdRecrawlGetErrorBody: TypeAlias = PlayAppsRecrawl401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetRecrawlPlayAppsIdRecrawlGetError:
    def map(self, status_code: int, content: bytes) -> GetRecrawlPlayAppsIdRecrawlGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayAppsRecrawl401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_recrawl_play_apps_id_recrawl_get_error_mapper: Final[
    ErrorMapper[GetRecrawlPlayAppsIdRecrawlGetErrorBody]
] = _GetRecrawlPlayAppsIdRecrawlGetError()
