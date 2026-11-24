from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post_history_import_retry400_error1 import ApiV1PostHistoryImportRetry400Error1
from ..models.api_v1_post_history_import_retry401_error1 import ApiV1PostHistoryImportRetry401Error1
from ..models.api_v1_post_history_import_retry403_error1 import ApiV1PostHistoryImportRetry403Error1
from ..models.api_v1_post_history_import_retry404_error1 import ApiV1PostHistoryImportRetry404Error1
from ..models.api_v1_post_history_import_retry429_error1 import ApiV1PostHistoryImportRetry429Error1
from ..models.api_v1_post_history_import_retry500_error1 import ApiV1PostHistoryImportRetry500Error1
from ..models.api_v1_post_history_import_retry502_error1 import ApiV1PostHistoryImportRetry502Error1
from ..models.api_v1_post_history_import_retry503_error1 import ApiV1PostHistoryImportRetry503Error1
from ..models.api_v1_post_history_import_retry504_error1 import ApiV1PostHistoryImportRetry504Error1

PostImportRetryImportErrorBody: TypeAlias = (
    ApiV1PostHistoryImportRetry400Error1
    | ApiV1PostHistoryImportRetry401Error1
    | ApiV1PostHistoryImportRetry403Error1
    | ApiV1PostHistoryImportRetry404Error1
    | ApiV1PostHistoryImportRetry429Error1
    | ApiV1PostHistoryImportRetry500Error1
    | ApiV1PostHistoryImportRetry502Error1
    | ApiV1PostHistoryImportRetry503Error1
    | ApiV1PostHistoryImportRetry504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostImportRetryImportError:
    def map(self, status_code: int, content: bytes) -> PostImportRetryImportErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PostHistoryImportRetry400Error1](content)
            case 401:
                return decode_json[ApiV1PostHistoryImportRetry401Error1](content)
            case 403:
                return decode_json[ApiV1PostHistoryImportRetry403Error1](content)
            case 404:
                return decode_json[ApiV1PostHistoryImportRetry404Error1](content)
            case 429:
                return decode_json[ApiV1PostHistoryImportRetry429Error1](content)
            case 500:
                return decode_json[ApiV1PostHistoryImportRetry500Error1](content)
            case 502:
                return decode_json[ApiV1PostHistoryImportRetry502Error1](content)
            case 503:
                return decode_json[ApiV1PostHistoryImportRetry503Error1](content)
            case 504:
                return decode_json[ApiV1PostHistoryImportRetry504Error1](content)
            case _:
                return RawError(status_code, content)


post_import_retry_import_error_mapper: Final[
    ErrorMapper[PostImportRetryImportErrorBody]
] = _PostImportRetryImportError()
