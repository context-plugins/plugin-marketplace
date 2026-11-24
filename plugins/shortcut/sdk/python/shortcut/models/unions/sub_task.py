from __future__ import annotations

from typing import TypeAlias

from ..create_sub_task_params import CreateSubTaskParams, CreateSubTaskParamsDict
from ..link_sub_task_params import LinkSubTaskParams, LinkSubTaskParamsDict

SubTask: TypeAlias = LinkSubTaskParams | CreateSubTaskParams

SubTaskDict: TypeAlias = LinkSubTaskParamsDict | CreateSubTaskParamsDict
