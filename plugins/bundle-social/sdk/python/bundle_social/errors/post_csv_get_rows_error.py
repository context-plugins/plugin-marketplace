from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post_csv_import_rows400_error1 import ApiV1PostCsvImportRows400Error1
from ..models.api_v1_post_csv_import_rows401_error1 import ApiV1PostCsvImportRows401Error1
from ..models.api_v1_post_csv_import_rows403_error1 import ApiV1PostCsvImportRows403Error1
from ..models.api_v1_post_csv_import_rows404_error1 import ApiV1PostCsvImportRows404Error1
from ..models.api_v1_post_csv_import_rows429_error1 import ApiV1PostCsvImportRows429Error1
from ..models.api_v1_post_csv_import_rows500_error1 import ApiV1PostCsvImportRows500Error1
from ..models.api_v1_post_csv_import_rows502_error1 import ApiV1PostCsvImportRows502Error1
from ..models.api_v1_post_csv_import_rows503_error1 import ApiV1PostCsvImportRows503Error1
from ..models.api_v1_post_csv_import_rows504_error1 import ApiV1PostCsvImportRows504Error1

PostCsvGetRowsErrorBody: TypeAlias = (
    ApiV1PostCsvImportRows400Error1
    | ApiV1PostCsvImportRows401Error1
    | ApiV1PostCsvImportRows403Error1
    | ApiV1PostCsvImportRows404Error1
    | ApiV1PostCsvImportRows429Error1
    | ApiV1PostCsvImportRows500Error1
    | ApiV1PostCsvImportRows502Error1
    | ApiV1PostCsvImportRows503Error1
    | ApiV1PostCsvImportRows504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostCsvGetRowsError:
    def map(self, status_code: int, content: bytes) -> PostCsvGetRowsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PostCsvImportRows400Error1](content)
            case 401:
                return decode_json[ApiV1PostCsvImportRows401Error1](content)
            case 403:
                return decode_json[ApiV1PostCsvImportRows403Error1](content)
            case 404:
                return decode_json[ApiV1PostCsvImportRows404Error1](content)
            case 429:
                return decode_json[ApiV1PostCsvImportRows429Error1](content)
            case 500:
                return decode_json[ApiV1PostCsvImportRows500Error1](content)
            case 502:
                return decode_json[ApiV1PostCsvImportRows502Error1](content)
            case 503:
                return decode_json[ApiV1PostCsvImportRows503Error1](content)
            case 504:
                return decode_json[ApiV1PostCsvImportRows504Error1](content)
            case _:
                return RawError(status_code, content)


post_csv_get_rows_error_mapper: Final[ErrorMapper[PostCsvGetRowsErrorBody]] = _PostCsvGetRowsError()
