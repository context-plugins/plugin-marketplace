from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .repository import Repository, RepositoryDict


class RepositoriesResponse(SdkBaseModel):
    repositories: Optional[list[Repository]] = UNSET


class RepositoriesResponseDict(TypedDict):
    repositories: NotRequired[list[RepositoryDict]]
