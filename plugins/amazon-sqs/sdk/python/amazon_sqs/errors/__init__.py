from .add_permission_error import AddPermissionErrorBody, add_permission_error_mapper
from .cancel_message_move_task_error import CancelMessageMoveTaskErrorBody, cancel_message_move_task_error_mapper
from .change_message_visibility_batch_error import (
    ChangeMessageVisibilityBatchErrorBody,
    change_message_visibility_batch_error_mapper,
)
from .change_message_visibility_error import ChangeMessageVisibilityErrorBody, change_message_visibility_error_mapper
from .create_queue_error import CreateQueueErrorBody, create_queue_error_mapper
from .delete_message_batch_error import DeleteMessageBatchErrorBody, delete_message_batch_error_mapper
from .delete_message_error import DeleteMessageErrorBody, delete_message_error_mapper
from .delete_queue_error import DeleteQueueErrorBody, delete_queue_error_mapper
from .get_queue_attributes_error import GetQueueAttributesErrorBody, get_queue_attributes_error_mapper
from .get_queue_url_error import GetQueueUrlErrorBody, get_queue_url_error_mapper
from .list_dead_letter_source_queues_error import (
    ListDeadLetterSourceQueuesErrorBody,
    list_dead_letter_source_queues_error_mapper,
)
from .list_message_move_tasks_error import ListMessageMoveTasksErrorBody, list_message_move_tasks_error_mapper
from .list_queue_tags_error import ListQueueTagsErrorBody, list_queue_tags_error_mapper
from .list_queues_error import ListQueuesErrorBody, list_queues_error_mapper
from .purge_queue_error import PurgeQueueErrorBody, purge_queue_error_mapper
from .receive_message_error import ReceiveMessageErrorBody, receive_message_error_mapper
from .remove_permission_error import RemovePermissionErrorBody, remove_permission_error_mapper
from .send_message_batch_error import SendMessageBatchErrorBody, send_message_batch_error_mapper
from .send_message_error import SendMessageErrorBody, send_message_error_mapper
from .set_queue_attributes_error import SetQueueAttributesErrorBody, set_queue_attributes_error_mapper
from .start_message_move_task_error import StartMessageMoveTaskErrorBody, start_message_move_task_error_mapper
from .tag_queue2_error import TagQueue2ErrorBody, tag_queue2_error_mapper
from .tag_queue_error import TagQueueErrorBody, tag_queue_error_mapper
from .untag_queue2_error import UntagQueue2ErrorBody, untag_queue2_error_mapper
from .untag_queue_error import UntagQueueErrorBody, untag_queue_error_mapper

__all__ = [
    "AddPermissionErrorBody",
    "CancelMessageMoveTaskErrorBody",
    "ChangeMessageVisibilityBatchErrorBody",
    "ChangeMessageVisibilityErrorBody",
    "CreateQueueErrorBody",
    "DeleteMessageBatchErrorBody",
    "DeleteMessageErrorBody",
    "DeleteQueueErrorBody",
    "GetQueueAttributesErrorBody",
    "GetQueueUrlErrorBody",
    "ListDeadLetterSourceQueuesErrorBody",
    "ListMessageMoveTasksErrorBody",
    "ListQueueTagsErrorBody",
    "ListQueuesErrorBody",
    "PurgeQueueErrorBody",
    "ReceiveMessageErrorBody",
    "RemovePermissionErrorBody",
    "SendMessageBatchErrorBody",
    "SendMessageErrorBody",
    "SetQueueAttributesErrorBody",
    "StartMessageMoveTaskErrorBody",
    "TagQueue2ErrorBody",
    "TagQueueErrorBody",
    "UntagQueue2ErrorBody",
    "UntagQueueErrorBody",
    "add_permission_error_mapper",
    "cancel_message_move_task_error_mapper",
    "change_message_visibility_batch_error_mapper",
    "change_message_visibility_error_mapper",
    "create_queue_error_mapper",
    "delete_message_batch_error_mapper",
    "delete_message_error_mapper",
    "delete_queue_error_mapper",
    "get_queue_attributes_error_mapper",
    "get_queue_url_error_mapper",
    "list_dead_letter_source_queues_error_mapper",
    "list_message_move_tasks_error_mapper",
    "list_queue_tags_error_mapper",
    "list_queues_error_mapper",
    "purge_queue_error_mapper",
    "receive_message_error_mapper",
    "remove_permission_error_mapper",
    "send_message_batch_error_mapper",
    "send_message_error_mapper",
    "set_queue_attributes_error_mapper",
    "start_message_move_task_error_mapper",
    "tag_queue2_error_mapper",
    "tag_queue_error_mapper",
    "untag_queue2_error_mapper",
    "untag_queue_error_mapper",
]
