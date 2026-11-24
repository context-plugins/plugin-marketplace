from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_boomi_data_hub_golden_records_api import ErrorResponseBoomiDataHubGoldenRecordsApi

PublishModelErrorBody: TypeAlias = ErrorResponseBoomiDataHubGoldenRecordsApi | RawError


@dataclass(frozen=True, slots=True)
class _PublishModelError:
    def map(self, status_code: int, content: bytes) -> PublishModelErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponseBoomiDataHubGoldenRecordsApi](content)
            case _:
                return RawError(status_code, content)


publish_model_error_mapper: Final[ErrorMapper[PublishModelErrorBody]] = _PublishModelError()
