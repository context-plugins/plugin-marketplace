from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_facebook_text_format_presets400_error1 import ApiV1MiscFacebookTextFormatPresets400Error1
from ..models.api_v1_misc_facebook_text_format_presets401_error1 import ApiV1MiscFacebookTextFormatPresets401Error1
from ..models.api_v1_misc_facebook_text_format_presets403_error1 import ApiV1MiscFacebookTextFormatPresets403Error1
from ..models.api_v1_misc_facebook_text_format_presets404_error1 import ApiV1MiscFacebookTextFormatPresets404Error1
from ..models.api_v1_misc_facebook_text_format_presets429_error1 import ApiV1MiscFacebookTextFormatPresets429Error1
from ..models.api_v1_misc_facebook_text_format_presets500_error1 import ApiV1MiscFacebookTextFormatPresets500Error1
from ..models.api_v1_misc_facebook_text_format_presets502_error1 import ApiV1MiscFacebookTextFormatPresets502Error1
from ..models.api_v1_misc_facebook_text_format_presets503_error1 import ApiV1MiscFacebookTextFormatPresets503Error1
from ..models.api_v1_misc_facebook_text_format_presets504_error1 import ApiV1MiscFacebookTextFormatPresets504Error1

MiscFacebookGetTextFormatPresetsErrorBody: TypeAlias = (
    ApiV1MiscFacebookTextFormatPresets400Error1
    | ApiV1MiscFacebookTextFormatPresets401Error1
    | ApiV1MiscFacebookTextFormatPresets403Error1
    | ApiV1MiscFacebookTextFormatPresets404Error1
    | ApiV1MiscFacebookTextFormatPresets429Error1
    | ApiV1MiscFacebookTextFormatPresets500Error1
    | ApiV1MiscFacebookTextFormatPresets502Error1
    | ApiV1MiscFacebookTextFormatPresets503Error1
    | ApiV1MiscFacebookTextFormatPresets504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscFacebookGetTextFormatPresetsError:
    def map(self, status_code: int, content: bytes) -> MiscFacebookGetTextFormatPresetsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscFacebookTextFormatPresets400Error1](content)
            case 401:
                return decode_json[ApiV1MiscFacebookTextFormatPresets401Error1](content)
            case 403:
                return decode_json[ApiV1MiscFacebookTextFormatPresets403Error1](content)
            case 404:
                return decode_json[ApiV1MiscFacebookTextFormatPresets404Error1](content)
            case 429:
                return decode_json[ApiV1MiscFacebookTextFormatPresets429Error1](content)
            case 500:
                return decode_json[ApiV1MiscFacebookTextFormatPresets500Error1](content)
            case 502:
                return decode_json[ApiV1MiscFacebookTextFormatPresets502Error1](content)
            case 503:
                return decode_json[ApiV1MiscFacebookTextFormatPresets503Error1](content)
            case 504:
                return decode_json[ApiV1MiscFacebookTextFormatPresets504Error1](content)
            case _:
                return RawError(status_code, content)


misc_facebook_get_text_format_presets_error_mapper: Final[
    ErrorMapper[MiscFacebookGetTextFormatPresetsErrorBody]
] = _MiscFacebookGetTextFormatPresetsError()
