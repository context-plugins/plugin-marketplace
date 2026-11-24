from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.ios_apps401_error1 import IosApps401Error1

GetAppSearchIosAppsGetErrorBody: TypeAlias = IosApps401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetAppSearchIosAppsGetError:
    def map(self, status_code: int, content: bytes) -> GetAppSearchIosAppsGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosApps401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_app_search_ios_apps_get_error_mapper: Final[
    ErrorMapper[GetAppSearchIosAppsGetErrorBody]
] = _GetAppSearchIosAppsGetError()
