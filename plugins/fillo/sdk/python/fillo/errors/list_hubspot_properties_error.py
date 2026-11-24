from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListHubspotPropertiesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListHubspotPropertiesError:
    def map(self, status_code: int, content: bytes) -> ListHubspotPropertiesErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_hubspot_properties_error_mapper: Final[ErrorMapper[ListHubspotPropertiesErrorBody]] = _ListHubspotPropertiesError()
