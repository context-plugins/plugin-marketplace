from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetCloudConnectSupportedFeaturesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetCloudConnectSupportedFeaturesError:
    def map(self, status_code: int, content: bytes) -> GetCloudConnectSupportedFeaturesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_cloud_connect_supported_features_error_mapper: Final[
    ErrorMapper[GetCloudConnectSupportedFeaturesErrorBody]
] = _GetCloudConnectSupportedFeaturesError()
