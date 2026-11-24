from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.format_aws_app_sync_types_api import FormatAwsAppSyncTypesApiOrStr


class V1ApisTypesRequest(SdkBaseModel):
    definition: str
    """The type definition, in GraphQL Schema Definition Language (SDL) format. For more information, see the GraphQL
    SDL documentation."""

    format: FormatAwsAppSyncTypesApiOrStr
    """The type format: SDL or JSON."""


class V1ApisTypesRequestDict(TypedDict):
    definition: str
    format: FormatAwsAppSyncTypesApiOrStr
