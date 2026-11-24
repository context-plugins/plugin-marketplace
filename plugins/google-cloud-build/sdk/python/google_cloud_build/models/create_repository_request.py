from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .repository1 import Repository1, Repository1Dict


class CreateRepositoryRequest(SdkBaseModel):
    """Message for creating a Repository."""

    repository_id: Optional[str] = Field(default=UNSET, alias="repositoryId")
    """Required. The ID to use for the repository, which will become the final component of the repository's resource
    name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@."""

    parent: Optional[str] = UNSET
    """Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest,
    this field should be empty or match the parent specified there."""

    repository: Optional[Repository1] = UNSET
    """Required. The repository to create."""


class CreateRepositoryRequestDict(TypedDict):
    repository_id: NotRequired[str]
    parent: NotRequired[str]
    repository: NotRequired[Repository1Dict]
