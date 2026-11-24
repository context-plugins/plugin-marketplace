from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_reviews_import400_error1 import ApiV1MiscGoogleBusinessReviewsImport400Error1
from ..models.api_v1_misc_google_business_reviews_import401_error1 import ApiV1MiscGoogleBusinessReviewsImport401Error1
from ..models.api_v1_misc_google_business_reviews_import403_error1 import ApiV1MiscGoogleBusinessReviewsImport403Error1
from ..models.api_v1_misc_google_business_reviews_import404_error1 import ApiV1MiscGoogleBusinessReviewsImport404Error1
from ..models.api_v1_misc_google_business_reviews_import409_error1 import ApiV1MiscGoogleBusinessReviewsImport409Error1
from ..models.api_v1_misc_google_business_reviews_import429_error1 import ApiV1MiscGoogleBusinessReviewsImport429Error1
from ..models.api_v1_misc_google_business_reviews_import500_error1 import ApiV1MiscGoogleBusinessReviewsImport500Error1
from ..models.api_v1_misc_google_business_reviews_import502_error1 import ApiV1MiscGoogleBusinessReviewsImport502Error1
from ..models.api_v1_misc_google_business_reviews_import503_error1 import ApiV1MiscGoogleBusinessReviewsImport503Error1
from ..models.api_v1_misc_google_business_reviews_import504_error1 import ApiV1MiscGoogleBusinessReviewsImport504Error1

MiscGoogleBusinessImportReviewsErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessReviewsImport400Error1
    | ApiV1MiscGoogleBusinessReviewsImport401Error1
    | ApiV1MiscGoogleBusinessReviewsImport403Error1
    | ApiV1MiscGoogleBusinessReviewsImport404Error1
    | ApiV1MiscGoogleBusinessReviewsImport409Error1
    | ApiV1MiscGoogleBusinessReviewsImport429Error1
    | ApiV1MiscGoogleBusinessReviewsImport500Error1
    | ApiV1MiscGoogleBusinessReviewsImport502Error1
    | ApiV1MiscGoogleBusinessReviewsImport503Error1
    | ApiV1MiscGoogleBusinessReviewsImport504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessImportReviewsError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessImportReviewsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessReviewsImport400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessReviewsImport401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessReviewsImport403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessReviewsImport404Error1](content)
            case 409:
                return decode_json[ApiV1MiscGoogleBusinessReviewsImport409Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessReviewsImport429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessReviewsImport500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessReviewsImport502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessReviewsImport503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessReviewsImport504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_import_reviews_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessImportReviewsErrorBody]
] = _MiscGoogleBusinessImportReviewsError()
