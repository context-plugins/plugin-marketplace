from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .aws_organization_settings import AwsOrganizationSettings, AwsOrganizationSettingsDict
from .enums.service1 import Service1OrStr


class AwsOrganizationServiceSettings(SdkBaseModel):
    service: Service1OrStr
    """Commitment type these settings apply to."""

    settings: AwsOrganizationSettings
    """Commitment settings for this commitment type."""


class AwsOrganizationServiceSettingsDict(TypedDict):
    service: Service1OrStr
    settings: AwsOrganizationSettingsDict
