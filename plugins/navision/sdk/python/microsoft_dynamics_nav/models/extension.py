from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.published_as import PublishedAsOrStr


class Extension(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """The extension ID"""

    package_id: Optional[UUID] = Field(default=UNSET, alias="packageId")
    """The package ID used for install/uninstall operations"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The extension display name"""

    publisher: Optional[str] = UNSET
    """The extension publisher"""

    version_major: Optional[int] = Field(default=UNSET, alias="versionMajor")
    """Major version number"""

    version_minor: Optional[int] = Field(default=UNSET, alias="versionMinor")
    """Minor version number"""

    version_build: Optional[int] = Field(default=UNSET, alias="versionBuild")
    """Build version number"""

    version_revision: Optional[int] = Field(default=UNSET, alias="versionRevision")
    """Revision version number"""

    is_installed: Optional[bool] = Field(default=UNSET, alias="isInstalled")
    """Whether the extension is currently installed"""

    published_as: Optional[PublishedAsOrStr] = Field(default=UNSET, alias="publishedAs")
    """How the extension was published"""


class ExtensionDict(TypedDict):
    id: NotRequired[UUID]
    package_id: NotRequired[UUID]
    display_name: NotRequired[str]
    publisher: NotRequired[str]
    version_major: NotRequired[int]
    version_minor: NotRequired[int]
    version_build: NotRequired[int]
    version_revision: NotRequired[int]
    is_installed: NotRequired[bool]
    published_as: NotRequired[PublishedAsOrStr]
