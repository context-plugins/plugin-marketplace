from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_tiktok_post_settings400_error1 import ApiV1MiscTiktokPostSettings400Error1
from ..models.api_v1_misc_tiktok_post_settings401_error1 import ApiV1MiscTiktokPostSettings401Error1
from ..models.api_v1_misc_tiktok_post_settings403_error1 import ApiV1MiscTiktokPostSettings403Error1
from ..models.api_v1_misc_tiktok_post_settings404_error1 import ApiV1MiscTiktokPostSettings404Error1
from ..models.api_v1_misc_tiktok_post_settings429_error1 import ApiV1MiscTiktokPostSettings429Error1
from ..models.api_v1_misc_tiktok_post_settings500_error1 import ApiV1MiscTiktokPostSettings500Error1
from ..models.api_v1_misc_tiktok_post_settings502_error1 import ApiV1MiscTiktokPostSettings502Error1
from ..models.api_v1_misc_tiktok_post_settings503_error1 import ApiV1MiscTiktokPostSettings503Error1
from ..models.api_v1_misc_tiktok_post_settings504_error1 import ApiV1MiscTiktokPostSettings504Error1

MiscTiktokGetPostSettingsErrorBody: TypeAlias = (
    ApiV1MiscTiktokPostSettings400Error1
    | ApiV1MiscTiktokPostSettings401Error1
    | ApiV1MiscTiktokPostSettings403Error1
    | ApiV1MiscTiktokPostSettings404Error1
    | ApiV1MiscTiktokPostSettings429Error1
    | ApiV1MiscTiktokPostSettings500Error1
    | ApiV1MiscTiktokPostSettings502Error1
    | ApiV1MiscTiktokPostSettings503Error1
    | ApiV1MiscTiktokPostSettings504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscTiktokGetPostSettingsError:
    def map(self, status_code: int, content: bytes) -> MiscTiktokGetPostSettingsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscTiktokPostSettings400Error1](content)
            case 401:
                return decode_json[ApiV1MiscTiktokPostSettings401Error1](content)
            case 403:
                return decode_json[ApiV1MiscTiktokPostSettings403Error1](content)
            case 404:
                return decode_json[ApiV1MiscTiktokPostSettings404Error1](content)
            case 429:
                return decode_json[ApiV1MiscTiktokPostSettings429Error1](content)
            case 500:
                return decode_json[ApiV1MiscTiktokPostSettings500Error1](content)
            case 502:
                return decode_json[ApiV1MiscTiktokPostSettings502Error1](content)
            case 503:
                return decode_json[ApiV1MiscTiktokPostSettings503Error1](content)
            case 504:
                return decode_json[ApiV1MiscTiktokPostSettings504Error1](content)
            case _:
                return RawError(status_code, content)


misc_tiktok_get_post_settings_error_mapper: Final[
    ErrorMapper[MiscTiktokGetPostSettingsErrorBody]
] = _MiscTiktokGetPostSettingsError()
