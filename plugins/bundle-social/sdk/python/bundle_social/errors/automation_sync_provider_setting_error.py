from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_automation_provider_settings_sync400_error1 import ApiV1AutomationProviderSettingsSync400Error1
from ..models.api_v1_automation_provider_settings_sync401_error1 import ApiV1AutomationProviderSettingsSync401Error1
from ..models.api_v1_automation_provider_settings_sync403_error1 import ApiV1AutomationProviderSettingsSync403Error1
from ..models.api_v1_automation_provider_settings_sync404_error1 import ApiV1AutomationProviderSettingsSync404Error1
from ..models.api_v1_automation_provider_settings_sync429_error1 import ApiV1AutomationProviderSettingsSync429Error1
from ..models.api_v1_automation_provider_settings_sync500_error1 import ApiV1AutomationProviderSettingsSync500Error1
from ..models.api_v1_automation_provider_settings_sync502_error1 import ApiV1AutomationProviderSettingsSync502Error1
from ..models.api_v1_automation_provider_settings_sync503_error1 import ApiV1AutomationProviderSettingsSync503Error1
from ..models.api_v1_automation_provider_settings_sync504_error1 import ApiV1AutomationProviderSettingsSync504Error1

AutomationSyncProviderSettingErrorBody: TypeAlias = (
    ApiV1AutomationProviderSettingsSync400Error1
    | ApiV1AutomationProviderSettingsSync401Error1
    | ApiV1AutomationProviderSettingsSync403Error1
    | ApiV1AutomationProviderSettingsSync404Error1
    | ApiV1AutomationProviderSettingsSync429Error1
    | ApiV1AutomationProviderSettingsSync500Error1
    | ApiV1AutomationProviderSettingsSync502Error1
    | ApiV1AutomationProviderSettingsSync503Error1
    | ApiV1AutomationProviderSettingsSync504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AutomationSyncProviderSettingError:
    def map(self, status_code: int, content: bytes) -> AutomationSyncProviderSettingErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1AutomationProviderSettingsSync400Error1](content)
            case 401:
                return decode_json[ApiV1AutomationProviderSettingsSync401Error1](content)
            case 403:
                return decode_json[ApiV1AutomationProviderSettingsSync403Error1](content)
            case 404:
                return decode_json[ApiV1AutomationProviderSettingsSync404Error1](content)
            case 429:
                return decode_json[ApiV1AutomationProviderSettingsSync429Error1](content)
            case 500:
                return decode_json[ApiV1AutomationProviderSettingsSync500Error1](content)
            case 502:
                return decode_json[ApiV1AutomationProviderSettingsSync502Error1](content)
            case 503:
                return decode_json[ApiV1AutomationProviderSettingsSync503Error1](content)
            case 504:
                return decode_json[ApiV1AutomationProviderSettingsSync504Error1](content)
            case _:
                return RawError(status_code, content)


automation_sync_provider_setting_error_mapper: Final[
    ErrorMapper[AutomationSyncProviderSettingErrorBody]
] = _AutomationSyncProviderSettingError()
