from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.connectors400_error1 import Connectors400Error1
from ..models.connectors401_error1 import Connectors401Error1
from ..models.connectors404_error1 import Connectors404Error1
from ..models.connectors500_error1 import Connectors500Error1

GetConnectorErrorBody: TypeAlias = (
    Connectors400Error1 | Connectors401Error1 | Connectors404Error1 | Connectors500Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _GetConnectorError:
    def map(self, status_code: int, content: bytes) -> GetConnectorErrorBody:
        match status_code:
            case 400:
                return decode_json[Connectors400Error1](content)
            case 401:
                return decode_json[Connectors401Error1](content)
            case 404:
                return decode_json[Connectors404Error1](content)
            case 500:
                return decode_json[Connectors500Error1](content)
            case _:
                return RawError(status_code, content)


get_connector_error_mapper: Final[ErrorMapper[GetConnectorErrorBody]] = _GetConnectorError()
