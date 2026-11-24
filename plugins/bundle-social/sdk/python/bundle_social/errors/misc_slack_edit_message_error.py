from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_slack_message400_error1 import ApiV1MiscSlackMessage400Error1
from ..models.api_v1_misc_slack_message401_error1 import ApiV1MiscSlackMessage401Error1
from ..models.api_v1_misc_slack_message403_error1 import ApiV1MiscSlackMessage403Error1
from ..models.api_v1_misc_slack_message404_error1 import ApiV1MiscSlackMessage404Error1
from ..models.api_v1_misc_slack_message429_error1 import ApiV1MiscSlackMessage429Error1
from ..models.api_v1_misc_slack_message500_error1 import ApiV1MiscSlackMessage500Error1
from ..models.api_v1_misc_slack_message502_error1 import ApiV1MiscSlackMessage502Error1
from ..models.api_v1_misc_slack_message503_error1 import ApiV1MiscSlackMessage503Error1
from ..models.api_v1_misc_slack_message504_error1 import ApiV1MiscSlackMessage504Error1

MiscSlackEditMessageErrorBody: TypeAlias = (
    ApiV1MiscSlackMessage400Error1
    | ApiV1MiscSlackMessage401Error1
    | ApiV1MiscSlackMessage403Error1
    | ApiV1MiscSlackMessage404Error1
    | ApiV1MiscSlackMessage429Error1
    | ApiV1MiscSlackMessage500Error1
    | ApiV1MiscSlackMessage502Error1
    | ApiV1MiscSlackMessage503Error1
    | ApiV1MiscSlackMessage504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscSlackEditMessageError:
    def map(self, status_code: int, content: bytes) -> MiscSlackEditMessageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscSlackMessage400Error1](content)
            case 401:
                return decode_json[ApiV1MiscSlackMessage401Error1](content)
            case 403:
                return decode_json[ApiV1MiscSlackMessage403Error1](content)
            case 404:
                return decode_json[ApiV1MiscSlackMessage404Error1](content)
            case 429:
                return decode_json[ApiV1MiscSlackMessage429Error1](content)
            case 500:
                return decode_json[ApiV1MiscSlackMessage500Error1](content)
            case 502:
                return decode_json[ApiV1MiscSlackMessage502Error1](content)
            case 503:
                return decode_json[ApiV1MiscSlackMessage503Error1](content)
            case 504:
                return decode_json[ApiV1MiscSlackMessage504Error1](content)
            case _:
                return RawError(status_code, content)


misc_slack_edit_message_error_mapper: Final[ErrorMapper[MiscSlackEditMessageErrorBody]] = _MiscSlackEditMessageError()
