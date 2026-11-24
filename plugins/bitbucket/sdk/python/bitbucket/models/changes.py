from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .assignee import Assignee, AssigneeDict
from .component1 import Component1, Component1Dict
from .content2 import Content2, Content2Dict
from .kind1 import Kind1, Kind1Dict
from .milestone1 import Milestone1, Milestone1Dict
from .priority1 import Priority1, Priority1Dict
from .state2 import State2, State2Dict
from .title import Title, TitleDict
from .version1 import Version1, Version1Dict


class Changes(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    assignee: Optional[Assignee] = UNSET
    state: Optional[State2] = UNSET
    title: Optional[Title] = UNSET
    kind: Optional[Kind1] = UNSET
    milestone: Optional[Milestone1] = UNSET
    component: Optional[Component1] = UNSET
    priority: Optional[Priority1] = UNSET
    version: Optional[Version1] = UNSET
    content: Optional[Content2] = UNSET


class ChangesDict(TypedDict):
    assignee: NotRequired[AssigneeDict]
    state: NotRequired[State2Dict]
    title: NotRequired[TitleDict]
    kind: NotRequired[Kind1Dict]
    milestone: NotRequired[Milestone1Dict]
    component: NotRequired[Component1Dict]
    priority: NotRequired[Priority1Dict]
    version: NotRequired[Version1Dict]
    content: NotRequired[Content2Dict]
