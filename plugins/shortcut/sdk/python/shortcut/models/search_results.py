from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .epic_search_results import EpicSearchResults, EpicSearchResultsDict
from .iteration_search_results import IterationSearchResults, IterationSearchResultsDict
from .objective_search_results import ObjectiveSearchResults, ObjectiveSearchResultsDict
from .story_search_results import StorySearchResults, StorySearchResultsDict


class SearchResults(SdkBaseModel):
    """The results of the multi-entity search query."""

    model_config = ConfigDict(extra="forbid")

    epics: Optional[EpicSearchResults] = UNSET
    """The results of the Epic search query."""

    stories: Optional[StorySearchResults] = UNSET
    """The results of the Story search query."""

    iterations: Optional[IterationSearchResults] = UNSET
    """The results of the Iteration search query."""

    milestones: Optional[ObjectiveSearchResults] = UNSET
    """The results of the Objective search query."""


class SearchResultsDict(TypedDict):
    epics: NotRequired[EpicSearchResultsDict]
    stories: NotRequired[StorySearchResultsDict]
    iterations: NotRequired[IterationSearchResultsDict]
    milestones: NotRequired[ObjectiveSearchResultsDict]
