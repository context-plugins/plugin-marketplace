from __future__ import annotations

from typing import TypeAlias

from ..response_completed_event import ResponseCompletedEvent, ResponseCompletedEventDict
from ..response_content_part_added_event import ResponseContentPartAddedEvent, ResponseContentPartAddedEventDict
from ..response_content_part_done_event import ResponseContentPartDoneEvent, ResponseContentPartDoneEventDict
from ..response_created_event import ResponseCreatedEvent, ResponseCreatedEventDict
from ..response_failed_event import ResponseFailedEvent, ResponseFailedEventDict
from ..response_in_progress_event import ResponseInProgressEvent, ResponseInProgressEventDict
from ..response_incomplete_event import ResponseIncompleteEvent, ResponseIncompleteEventDict
from ..response_output_item_added_event import ResponseOutputItemAddedEvent, ResponseOutputItemAddedEventDict
from ..response_output_item_done_event import ResponseOutputItemDoneEvent, ResponseOutputItemDoneEventDict
from ..response_output_text_annotation_added_event import (
    ResponseOutputTextAnnotationAddedEvent,
    ResponseOutputTextAnnotationAddedEventDict,
)
from ..response_text_delta_event import ResponseTextDeltaEvent, ResponseTextDeltaEventDict
from ..response_text_done_event import ResponseTextDoneEvent, ResponseTextDoneEventDict

ResponseStreamEvent: TypeAlias = (
    ResponseCreatedEvent
    | ResponseInProgressEvent
    | ResponseOutputItemAddedEvent
    | ResponseContentPartAddedEvent
    | ResponseTextDeltaEvent
    | ResponseTextDoneEvent
    | ResponseOutputTextAnnotationAddedEvent
    | ResponseContentPartDoneEvent
    | ResponseOutputItemDoneEvent
    | ResponseCompletedEvent
    | ResponseFailedEvent
    | ResponseIncompleteEvent
)
"""An event in the Responses API SSE stream; ``type`` identifies the event."""

ResponseStreamEventDict: TypeAlias = (
    ResponseCreatedEventDict
    | ResponseInProgressEventDict
    | ResponseOutputItemAddedEventDict
    | ResponseContentPartAddedEventDict
    | ResponseTextDeltaEventDict
    | ResponseTextDoneEventDict
    | ResponseOutputTextAnnotationAddedEventDict
    | ResponseContentPartDoneEventDict
    | ResponseOutputItemDoneEventDict
    | ResponseCompletedEventDict
    | ResponseFailedEventDict
    | ResponseIncompleteEventDict
)
