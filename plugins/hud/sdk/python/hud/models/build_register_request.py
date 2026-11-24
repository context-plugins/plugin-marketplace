from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BuildRegisterRequest(SdkBaseModel):
    """Record an uploaded build context as a build of an environment without building it.

    With ``external_id`` the environment is the team's environment imported under that id, created on first use and
    named ``name``, suffixed when the name is taken."""

    registry_id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    project_id: Optional[UUID] = UNSET
    build_id: UUID
    external_id: Optional[str] = UNSET
    """Identity of the environment in the system it is imported from, as ``<system>:<id>``, e.g.
    ``harbor:hello-world``"""

    content_digest: Optional[str] = UNSET
    """Content hash of the uploaded source; registering a digest the environment already has returns that build and
    discards the upload"""


class BuildRegisterRequestDict(TypedDict):
    registry_id: NotRequired[UUID]
    name: NotRequired[str]
    project_id: NotRequired[UUID]
    build_id: UUID
    external_id: NotRequired[str]
    content_digest: NotRequired[str]
