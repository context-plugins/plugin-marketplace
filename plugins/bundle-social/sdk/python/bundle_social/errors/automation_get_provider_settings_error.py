from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automation_provider_settings400_error1 import ApiV1AutomationProviderSettings400Error1
from ..models.api_v1_automation_provider_settings401_error1 import ApiV1AutomationProviderSettings401Error1
from ..models.api_v1_automation_provider_settings403_error1 import ApiV1AutomationProviderSettings403Error1
from ..models.api_v1_automation_provider_settings404_error1 import ApiV1AutomationProviderSettings404Error1
from ..models.api_v1_automation_provider_settings429_error1 import ApiV1AutomationProviderSettings429Error1
from ..models.api_v1_automation_provider_settings500_error1 import ApiV1AutomationProviderSettings500Error1
from ..models.api_v1_automation_provider_settings502_error1 import ApiV1AutomationProviderSettings502Error1
from ..models.api_v1_automation_provider_settings503_error1 import ApiV1AutomationProviderSettings503Error1
from ..models.api_v1_automation_provider_settings504_error1 import ApiV1AutomationProviderSettings504Error1

AutomationGetProviderSettingsErrorBody: TypeAlias = (
    ApiV1AutomationProviderSettings400Error1
    | ApiV1AutomationProviderSettings401Error1
    | ApiV1AutomationProviderSettings403Error1
    | ApiV1AutomationProviderSettings404Error1
    | ApiV1AutomationProviderSettings429Error1
    | ApiV1AutomationProviderSettings500Error1
    | ApiV1AutomationProviderSettings502Error1
    | ApiV1AutomationProviderSettings503Error1
    | ApiV1AutomationProviderSettings504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationGetProviderSettingsError:
    def map(self, status_code: int, content: bytes) -> AutomationGetProviderSettingsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationProviderSettings400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationProviderSettings401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationProviderSettings403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationProviderSettings404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationProviderSettings429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationProviderSettings500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationProviderSettings502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationProviderSettings503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationProviderSettings504Error1](content)
            case _:
                return RawError(status_code, content)


automation_get_provider_settings_error_mapper: Final[
    ErrorMapper[AutomationGetProviderSettingsErrorBody]
] = _AutomationGetProviderSettingsError()
