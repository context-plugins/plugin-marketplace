from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..agent_message_event import AgentMessageEvent, AgentMessageEventDict
from ..file_capture_event import FileCaptureEvent, FileCaptureEventDict
from ..file_change_event import FileChangeEvent, FileChangeEventDict
from ..file_setup_event import FileSetupEvent, FileSetupEventDict
from ..file_snapshot_event import FileSnapshotEvent, FileSnapshotEventDict
from ..inference_event import InferenceEvent, InferenceEventDict
from ..observation_event import ObservationEvent, ObservationEventDict
from ..raw_event import RawEvent, RawEventDict
from ..scenario_event import ScenarioEvent, ScenarioEventDict
from ..subagent_event import SubagentEvent, SubagentEventDict
from ..tool_call_event import ToolCallEvent, ToolCallEventDict
from ..user_message_event import UserMessageEvent, UserMessageEventDict
from ..video_segment_event import VideoSegmentEvent, VideoSegmentEventDict

Event: TypeAlias = Annotated[
    (
        Annotated[UserMessageEvent, Tag("user_message")]
        | Annotated[AgentMessageEvent, Tag("agent_message")]
        | Annotated[ToolCallEvent, Tag("tool_call")]
        | Annotated[ScenarioEvent, Tag("scenario_evaluate")]
        | Annotated[ScenarioEvent, Tag("scenario_setup")]
        | Annotated[SubagentEvent, Tag("subagent")]
        | Annotated[ObservationEvent, Tag("robot_observation")]
        | Annotated[InferenceEvent, Tag("robot_inference")]
        | Annotated[VideoSegmentEvent, Tag("robot_video_segment")]
        | Annotated[FileSnapshotEvent, Tag("file_snapshot")]
        | Annotated[FileSetupEvent, Tag("file_setup")]
        | Annotated[FileChangeEvent, Tag("file_change")]
        | Annotated[FileCaptureEvent, Tag("file_capture")]
        | Annotated[RawEvent, Tag("raw")]
    ),
    WireDiscriminator("kind"),
]

EventDict: TypeAlias = (
    UserMessageEventDict
    | AgentMessageEventDict
    | ToolCallEventDict
    | ScenarioEventDict
    | SubagentEventDict
    | ObservationEventDict
    | InferenceEventDict
    | VideoSegmentEventDict
    | FileSnapshotEventDict
    | FileSetupEventDict
    | FileChangeEventDict
    | FileCaptureEventDict
    | RawEventDict
)
