from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_apps401_error1 import PlayApps401Error1

GetAppSearchPlayAppsGetErrorBody: TypeAlias = PlayApps401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetAppSearchPlayAppsGetError:
    def map(self, status_code: int, content: bytes) -> GetAppSearchPlayAppsGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayApps401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_app_search_play_apps_get_error_mapper: Final[
    ErrorMapper[GetAppSearchPlayAppsGetErrorBody]
] = _GetAppSearchPlayAppsGetError()
