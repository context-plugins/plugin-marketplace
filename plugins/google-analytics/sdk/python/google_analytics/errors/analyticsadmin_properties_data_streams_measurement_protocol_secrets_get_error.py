from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError:
    def map(
        self, status_code: int, content: bytes
    ) -> AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


analyticsadmin_properties_data_streams_measurement_protocol_secrets_get_error_mapper: Final[
    ErrorMapper[AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetErrorBody]
] = _AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetError()
