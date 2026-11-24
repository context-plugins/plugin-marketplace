from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post_csv_import400_error1 import ApiV1PostCsvImport400Error1
from ..models.api_v1_post_csv_import401_error1 import ApiV1PostCsvImport401Error1
from ..models.api_v1_post_csv_import403_error1 import ApiV1PostCsvImport403Error1
from ..models.api_v1_post_csv_import404_error1 import ApiV1PostCsvImport404Error1
from ..models.api_v1_post_csv_import429_error1 import ApiV1PostCsvImport429Error1
from ..models.api_v1_post_csv_import500_error1 import ApiV1PostCsvImport500Error1
from ..models.api_v1_post_csv_import502_error1 import ApiV1PostCsvImport502Error1
from ..models.api_v1_post_csv_import503_error1 import ApiV1PostCsvImport503Error1
from ..models.api_v1_post_csv_import504_error1 import ApiV1PostCsvImport504Error1

PostCsvCreateErrorBody: TypeAlias = (
    ApiV1PostCsvImport400Error1
    | ApiV1PostCsvImport401Error1
    | ApiV1PostCsvImport403Error1
    | ApiV1PostCsvImport404Error1
    | ApiV1PostCsvImport429Error1
    | ApiV1PostCsvImport500Error1
    | ApiV1PostCsvImport502Error1
    | ApiV1PostCsvImport503Error1
    | ApiV1PostCsvImport504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostCsvCreateError:
    def map(self, status_code: int, content: bytes) -> PostCsvCreateErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PostCsvImport400Error1](content)
            case 401:
                return decode_json[ApiV1PostCsvImport401Error1](content)
            case 403:
                return decode_json[ApiV1PostCsvImport403Error1](content)
            case 404:
                return decode_json[ApiV1PostCsvImport404Error1](content)
            case 429:
                return decode_json[ApiV1PostCsvImport429Error1](content)
            case 500:
                return decode_json[ApiV1PostCsvImport500Error1](content)
            case 502:
                return decode_json[ApiV1PostCsvImport502Error1](content)
            case 503:
                return decode_json[ApiV1PostCsvImport503Error1](content)
            case 504:
                return decode_json[ApiV1PostCsvImport504Error1](content)
            case _:
                return RawError(status_code, content)


post_csv_create_error_mapper: Final[ErrorMapper[PostCsvCreateErrorBody]] = _PostCsvCreateError()
