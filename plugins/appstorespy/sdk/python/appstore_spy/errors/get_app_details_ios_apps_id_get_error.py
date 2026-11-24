from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.http_validation_error import HttpValidationError
from ..models.ios_apps401_error1 import IosApps401Error1

GetAppDetailsIosAppsIdGetErrorBody: TypeAlias = IosApps401Error1 | str | Error | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetAppDetailsIosAppsIdGetError:
    def map(self, status_code: int, content: bytes) -> GetAppDetailsIosAppsIdGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosApps401Error1](content)
            case 402:
                return decode_json[str](content)
            case 403 | 429:
                return decode_json[Error](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_app_details_ios_apps_id_get_error_mapper: Final[
    ErrorMapper[GetAppDetailsIosAppsIdGetErrorBody]
] = _GetAppDetailsIosAppsIdGetError()
