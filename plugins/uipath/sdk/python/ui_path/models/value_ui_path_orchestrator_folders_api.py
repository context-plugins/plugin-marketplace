from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.folder_type import FolderTypeOrStr


class ValueUiPathOrchestratorFoldersApi(SdkBaseModel):
    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique folder identifier used in X-UIPATH-OrganizationUnitId"""

    key: Optional[UUID] = Field(default=UNSET, alias="Key")
    """Unique GUID key for the folder"""

    display_name: Optional[str] = Field(default=UNSET, alias="DisplayName")
    """Display name of the folder"""

    fully_qualified_name: Optional[str] = Field(default=UNSET, alias="FullyQualifiedName")
    """Full path of the folder including parent hierarchy"""

    folder_type: Optional[FolderTypeOrStr] = Field(default=UNSET, alias="FolderType")
    """Type classification of the folder"""


class ValueUiPathOrchestratorFoldersApiDict(TypedDict):
    id: NotRequired[int]
    key: NotRequired[UUID]
    display_name: NotRequired[str]
    fully_qualified_name: NotRequired[str]
    folder_type: NotRequired[FolderTypeOrStr]
