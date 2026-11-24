from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

PostApisV4AppCenterV2PartnerViewerStatusErrorBody: TypeAlias = str | RawError


@dataclass(frozen=True, slots=True)
class _PostApisV4AppCenterV2PartnerViewerStatusError:
    def map(self, status_code: int, content: bytes) -> PostApisV4AppCenterV2PartnerViewerStatusErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


post_apis_v4_app_center_v2_partner_viewer_status_error_mapper: Final[
    ErrorMapper[PostApisV4AppCenterV2PartnerViewerStatusErrorBody]
] = _PostApisV4AppCenterV2PartnerViewerStatusError()
