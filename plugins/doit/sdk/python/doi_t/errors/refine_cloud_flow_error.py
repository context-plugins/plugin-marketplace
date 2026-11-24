from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

RefineCloudFlowErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _RefineCloudFlowError:
    def map(self, status_code: int, content: bytes) -> RefineCloudFlowErrorBody:
        match status_code:
            case 400 | 401 | 403 | 406 | 500 | 502:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


refine_cloud_flow_error_mapper: Final[ErrorMapper[RefineCloudFlowErrorBody]] = _RefineCloudFlowError()
