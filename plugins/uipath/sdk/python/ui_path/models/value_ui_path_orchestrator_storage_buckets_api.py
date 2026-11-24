from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.storage_provider import StorageProviderOrStr


class ValueUiPathOrchestratorStorageBucketsApi(SdkBaseModel):
    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique storage bucket identifier"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Display name of the storage bucket"""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """Optional description of the bucket"""

    storage_provider: Optional[StorageProviderOrStr] = Field(default=UNSET, alias="StorageProvider")
    """Cloud storage backend provider"""


class ValueUiPathOrchestratorStorageBucketsApiDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    description: NotRequired[str]
    storage_provider: NotRequired[StorageProviderOrStr]
