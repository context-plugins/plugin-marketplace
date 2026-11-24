from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.format_aws_app_sync_types_api import FormatAwsAppSyncTypesApiOrStr


class TypeAwsAppSyncTypesApi(SdkBaseModel):
    name: Optional[str] = UNSET
    """The type name."""

    description: Optional[str] = UNSET
    """The type description."""

    arn: Optional[str] = UNSET
    """The type Amazon Resource Name (ARN)."""

    definition: Optional[str] = UNSET
    """The type definition."""

    format: Optional[FormatAwsAppSyncTypesApiOrStr] = UNSET
    """The type format: SDL or JSON."""


class TypeAwsAppSyncTypesApiDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    arn: NotRequired[str]
    definition: NotRequired[str]
    format: NotRequired[FormatAwsAppSyncTypesApiOrStr]
