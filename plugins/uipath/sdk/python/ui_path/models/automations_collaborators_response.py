from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .collaborator import Collaborator, CollaboratorDict


class AutomationsCollaboratorsResponse(SdkBaseModel):
    collaborators: Optional[list[Collaborator]] = UNSET


class AutomationsCollaboratorsResponseDict(TypedDict):
    collaborators: NotRequired[list[CollaboratorDict]]
