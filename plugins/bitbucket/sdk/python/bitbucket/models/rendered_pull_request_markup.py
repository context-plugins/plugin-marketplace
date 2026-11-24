from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .description import Description, DescriptionDict
from .reason import Reason, ReasonDict
from .title_bitbucket_pullrequests_api import TitleBitbucketPullrequestsApi, TitleBitbucketPullrequestsApiDict


class RenderedPullRequestMarkup(SdkBaseModel):
    """User provided pull request text, interpreted in a markup language and rendered in HTML"""

    model_config = ConfigDict(extra="forbid")

    title: Optional[TitleBitbucketPullrequestsApi] = UNSET
    description: Optional[Description] = UNSET
    reason: Optional[Reason] = UNSET


class RenderedPullRequestMarkupDict(TypedDict):
    title: NotRequired[TitleBitbucketPullrequestsApiDict]
    description: NotRequired[DescriptionDict]
    reason: NotRequired[ReasonDict]
