from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post_history_import400_error1 import ApiV1PostHistoryImport400Error1
from ..models.api_v1_post_history_import401_error1 import ApiV1PostHistoryImport401Error1
from ..models.api_v1_post_history_import403_error1 import ApiV1PostHistoryImport403Error1
from ..models.api_v1_post_history_import404_error1 import ApiV1PostHistoryImport404Error1
from ..models.api_v1_post_history_import409_error1 import ApiV1PostHistoryImport409Error1
from ..models.api_v1_post_history_import429_error1 import ApiV1PostHistoryImport429Error1
from ..models.api_v1_post_history_import500_error1 import ApiV1PostHistoryImport500Error1
from ..models.api_v1_post_history_import502_error1 import ApiV1PostHistoryImport502Error1
from ..models.api_v1_post_history_import503_error1 import ApiV1PostHistoryImport503Error1
from ..models.api_v1_post_history_import504_error1 import ApiV1PostHistoryImport504Error1

PostImportCreateErrorBody: TypeAlias = (
    ApiV1PostHistoryImport400Error1
    | ApiV1PostHistoryImport401Error1
    | ApiV1PostHistoryImport403Error1
    | ApiV1PostHistoryImport404Error1
    | ApiV1PostHistoryImport409Error1
    | ApiV1PostHistoryImport429Error1
    | ApiV1PostHistoryImport500Error1
    | ApiV1PostHistoryImport502Error1
    | ApiV1PostHistoryImport503Error1
    | ApiV1PostHistoryImport504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostImportCreateError:
    def map(self, status_code: int, content: bytes) -> PostImportCreateErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PostHistoryImport400Error1](content)
            case 401:
                return decode_json[ApiV1PostHistoryImport401Error1](content)
            case 403:
                return decode_json[ApiV1PostHistoryImport403Error1](content)
            case 404:
                return decode_json[ApiV1PostHistoryImport404Error1](content)
            case 409:
                return decode_json[ApiV1PostHistoryImport409Error1](content)
            case 429:
                return decode_json[ApiV1PostHistoryImport429Error1](content)
            case 500:
                return decode_json[ApiV1PostHistoryImport500Error1](content)
            case 502:
                return decode_json[ApiV1PostHistoryImport502Error1](content)
            case 503:
                return decode_json[ApiV1PostHistoryImport503Error1](content)
            case 504:
                return decode_json[ApiV1PostHistoryImport504Error1](content)
            case _:
                return RawError(status_code, content)


post_import_create_error_mapper: Final[ErrorMapper[PostImportCreateErrorBody]] = _PostImportCreateError()
