from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_team400_error1 import ApiV1Team400Error1
from ..models.api_v1_team401_error1 import ApiV1Team401Error1
from ..models.api_v1_team403_error1 import ApiV1Team403Error1
from ..models.api_v1_team404_error1 import ApiV1Team404Error1
from ..models.api_v1_team429_error1 import ApiV1Team429Error1
from ..models.api_v1_team500_error1 import ApiV1Team500Error1
from ..models.api_v1_team502_error1 import ApiV1Team502Error1
from ..models.api_v1_team503_error1 import ApiV1Team503Error1
from ..models.api_v1_team504_error1 import ApiV1Team504Error1

TeamGetTeamErrorBody: TypeAlias = (
    ApiV1Team400Error1
    | ApiV1Team401Error1
    | ApiV1Team403Error1
    | ApiV1Team404Error1
    | ApiV1Team429Error1
    | ApiV1Team500Error1
    | ApiV1Team502Error1
    | ApiV1Team503Error1
    | ApiV1Team504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _TeamGetTeamError:
    def map(self, status_code: int, content: bytes) -> TeamGetTeamErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1Team400Error1](content)
            case 401:
                return decode_json[ApiV1Team401Error1](content)
            case 403:
                return decode_json[ApiV1Team403Error1](content)
            case 404:
                return decode_json[ApiV1Team404Error1](content)
            case 429:
                return decode_json[ApiV1Team429Error1](content)
            case 500:
                return decode_json[ApiV1Team500Error1](content)
            case 502:
                return decode_json[ApiV1Team502Error1](content)
            case 503:
                return decode_json[ApiV1Team503Error1](content)
            case 504:
                return decode_json[ApiV1Team504Error1](content)
            case _:
                return RawError(status_code, content)


team_get_team_error_mapper: Final[ErrorMapper[TeamGetTeamErrorBody]] = _TeamGetTeamError()
