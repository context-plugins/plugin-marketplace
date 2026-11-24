from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post_csv_import_status400_error1 import ApiV1PostCsvImportStatus400Error1
from ..models.api_v1_post_csv_import_status401_error1 import ApiV1PostCsvImportStatus401Error1
from ..models.api_v1_post_csv_import_status403_error1 import ApiV1PostCsvImportStatus403Error1
from ..models.api_v1_post_csv_import_status404_error1 import ApiV1PostCsvImportStatus404Error1
from ..models.api_v1_post_csv_import_status429_error1 import ApiV1PostCsvImportStatus429Error1
from ..models.api_v1_post_csv_import_status500_error1 import ApiV1PostCsvImportStatus500Error1
from ..models.api_v1_post_csv_import_status502_error1 import ApiV1PostCsvImportStatus502Error1
from ..models.api_v1_post_csv_import_status503_error1 import ApiV1PostCsvImportStatus503Error1
from ..models.api_v1_post_csv_import_status504_error1 import ApiV1PostCsvImportStatus504Error1

PostCsvGetStatusErrorBody: TypeAlias = (
    ApiV1PostCsvImportStatus400Error1
    | ApiV1PostCsvImportStatus401Error1
    | ApiV1PostCsvImportStatus403Error1
    | ApiV1PostCsvImportStatus404Error1
    | ApiV1PostCsvImportStatus429Error1
    | ApiV1PostCsvImportStatus500Error1
    | ApiV1PostCsvImportStatus502Error1
    | ApiV1PostCsvImportStatus503Error1
    | ApiV1PostCsvImportStatus504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostCsvGetStatusError:
    def map(self, status_code: int, content: bytes) -> PostCsvGetStatusErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PostCsvImportStatus400Error1](content)
            case 401:
                return decode_json[ApiV1PostCsvImportStatus401Error1](content)
            case 403:
                return decode_json[ApiV1PostCsvImportStatus403Error1](content)
            case 404:
                return decode_json[ApiV1PostCsvImportStatus404Error1](content)
            case 429:
                return decode_json[ApiV1PostCsvImportStatus429Error1](content)
            case 500:
                return decode_json[ApiV1PostCsvImportStatus500Error1](content)
            case 502:
                return decode_json[ApiV1PostCsvImportStatus502Error1](content)
            case 503:
                return decode_json[ApiV1PostCsvImportStatus503Error1](content)
            case 504:
                return decode_json[ApiV1PostCsvImportStatus504Error1](content)
            case _:
                return RawError(status_code, content)


post_csv_get_status_error_mapper: Final[ErrorMapper[PostCsvGetStatusErrorBody]] = _PostCsvGetStatusError()
