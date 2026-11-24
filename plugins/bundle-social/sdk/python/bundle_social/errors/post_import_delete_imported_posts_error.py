from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post_history_import_posts400_error1 import ApiV1PostHistoryImportPosts400Error1
from ..models.api_v1_post_history_import_posts401_error1 import ApiV1PostHistoryImportPosts401Error1
from ..models.api_v1_post_history_import_posts403_error1 import ApiV1PostHistoryImportPosts403Error1
from ..models.api_v1_post_history_import_posts404_error1 import ApiV1PostHistoryImportPosts404Error1
from ..models.api_v1_post_history_import_posts429_error1 import ApiV1PostHistoryImportPosts429Error1
from ..models.api_v1_post_history_import_posts500_error1 import ApiV1PostHistoryImportPosts500Error1
from ..models.api_v1_post_history_import_posts502_error1 import ApiV1PostHistoryImportPosts502Error1
from ..models.api_v1_post_history_import_posts503_error1 import ApiV1PostHistoryImportPosts503Error1
from ..models.api_v1_post_history_import_posts504_error1 import ApiV1PostHistoryImportPosts504Error1

PostImportDeleteImportedPostsErrorBody: TypeAlias = (
    ApiV1PostHistoryImportPosts400Error1
    | ApiV1PostHistoryImportPosts401Error1
    | ApiV1PostHistoryImportPosts403Error1
    | ApiV1PostHistoryImportPosts404Error1
    | ApiV1PostHistoryImportPosts429Error1
    | ApiV1PostHistoryImportPosts500Error1
    | ApiV1PostHistoryImportPosts502Error1
    | ApiV1PostHistoryImportPosts503Error1
    | ApiV1PostHistoryImportPosts504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostImportDeleteImportedPostsError:
    def map(self, status_code: int, content: bytes) -> PostImportDeleteImportedPostsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PostHistoryImportPosts400Error1](content)
            case 401:
                return decode_json[ApiV1PostHistoryImportPosts401Error1](content)
            case 403:
                return decode_json[ApiV1PostHistoryImportPosts403Error1](content)
            case 404:
                return decode_json[ApiV1PostHistoryImportPosts404Error1](content)
            case 429:
                return decode_json[ApiV1PostHistoryImportPosts429Error1](content)
            case 500:
                return decode_json[ApiV1PostHistoryImportPosts500Error1](content)
            case 502:
                return decode_json[ApiV1PostHistoryImportPosts502Error1](content)
            case 503:
                return decode_json[ApiV1PostHistoryImportPosts503Error1](content)
            case 504:
                return decode_json[ApiV1PostHistoryImportPosts504Error1](content)
            case _:
                return RawError(status_code, content)


post_import_delete_imported_posts_error_mapper: Final[
    ErrorMapper[PostImportDeleteImportedPostsErrorBody]
] = _PostImportDeleteImportedPostsError()
