from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.misc_bluesky_delete_comment_error import (
    MiscBlueskyDeleteCommentErrorBody,
    misc_bluesky_delete_comment_error_mapper,
)
from ..errors.misc_bluesky_delete_post_error import (
    MiscBlueskyDeletePostErrorBody,
    misc_bluesky_delete_post_error_mapper,
)
from ..errors.misc_discord_delete_message_error import (
    MiscDiscordDeleteMessageErrorBody,
    misc_discord_delete_message_error_mapper,
)
from ..errors.misc_facebook_delete_comment_error import (
    MiscFacebookDeleteCommentErrorBody,
    misc_facebook_delete_comment_error_mapper,
)
from ..errors.misc_facebook_delete_post_error import (
    MiscFacebookDeletePostErrorBody,
    misc_facebook_delete_post_error_mapper,
)
from ..errors.misc_facebook_edit_comment_error import (
    MiscFacebookEditCommentErrorBody,
    misc_facebook_edit_comment_error_mapper,
)
from ..errors.misc_facebook_edit_post_error import MiscFacebookEditPostErrorBody, misc_facebook_edit_post_error_mapper
from ..errors.misc_facebook_get_recommendation_by_id_error import (
    MiscFacebookGetRecommendationByIdErrorBody,
    misc_facebook_get_recommendation_by_id_error_mapper,
)
from ..errors.misc_facebook_get_recommendation_comments_error import (
    MiscFacebookGetRecommendationCommentsErrorBody,
    misc_facebook_get_recommendation_comments_error_mapper,
)
from ..errors.misc_facebook_get_recommendation_import_by_id_error import (
    MiscFacebookGetRecommendationImportByIdErrorBody,
    misc_facebook_get_recommendation_import_by_id_error_mapper,
)
from ..errors.misc_facebook_get_recommendation_import_status_error import (
    MiscFacebookGetRecommendationImportStatusErrorBody,
    misc_facebook_get_recommendation_import_status_error_mapper,
)
from ..errors.misc_facebook_get_recommendations_error import (
    MiscFacebookGetRecommendationsErrorBody,
    misc_facebook_get_recommendations_error_mapper,
)
from ..errors.misc_facebook_get_text_format_presets_error import (
    MiscFacebookGetTextFormatPresetsErrorBody,
    misc_facebook_get_text_format_presets_error_mapper,
)
from ..errors.misc_facebook_get_token_debug_error import (
    MiscFacebookGetTokenDebugErrorBody,
    misc_facebook_get_token_debug_error_mapper,
)
from ..errors.misc_facebook_import_recommendations_error import (
    MiscFacebookImportRecommendationsErrorBody,
    misc_facebook_import_recommendations_error_mapper,
)
from ..errors.misc_facebook_reply_to_recommendation_comment_error import (
    MiscFacebookReplyToRecommendationCommentErrorBody,
    misc_facebook_reply_to_recommendation_comment_error_mapper,
)
from ..errors.misc_facebook_reply_to_recommendation_error import (
    MiscFacebookReplyToRecommendationErrorBody,
    misc_facebook_reply_to_recommendation_error_mapper,
)
from ..errors.misc_facebook_search_pages_error import (
    MiscFacebookSearchPagesErrorBody,
    misc_facebook_search_pages_error_mapper,
)
from ..errors.misc_google_business_add_media_error import (
    MiscGoogleBusinessAddMediaErrorBody,
    misc_google_business_add_media_error_mapper,
)
from ..errors.misc_google_business_create_place_action_link_error import (
    MiscGoogleBusinessCreatePlaceActionLinkErrorBody,
    misc_google_business_create_place_action_link_error_mapper,
)
from ..errors.misc_google_business_delete_media_error import (
    MiscGoogleBusinessDeleteMediaErrorBody,
    misc_google_business_delete_media_error_mapper,
)
from ..errors.misc_google_business_delete_place_action_link_error import (
    MiscGoogleBusinessDeletePlaceActionLinkErrorBody,
    misc_google_business_delete_place_action_link_error_mapper,
)
from ..errors.misc_google_business_delete_post_error import (
    MiscGoogleBusinessDeletePostErrorBody,
    misc_google_business_delete_post_error_mapper,
)
from ..errors.misc_google_business_delete_review_reply_error import (
    MiscGoogleBusinessDeleteReviewReplyErrorBody,
    misc_google_business_delete_review_reply_error_mapper,
)
from ..errors.misc_google_business_get_attributes_error import (
    MiscGoogleBusinessGetAttributesErrorBody,
    misc_google_business_get_attributes_error_mapper,
)
from ..errors.misc_google_business_get_food_menus_error import (
    MiscGoogleBusinessGetFoodMenusErrorBody,
    misc_google_business_get_food_menus_error_mapper,
)
from ..errors.misc_google_business_get_location_error import (
    MiscGoogleBusinessGetLocationErrorBody,
    misc_google_business_get_location_error_mapper,
)
from ..errors.misc_google_business_get_review_by_id_error import (
    MiscGoogleBusinessGetReviewByIdErrorBody,
    misc_google_business_get_review_by_id_error_mapper,
)
from ..errors.misc_google_business_get_review_import_by_id_error import (
    MiscGoogleBusinessGetReviewImportByIdErrorBody,
    misc_google_business_get_review_import_by_id_error_mapper,
)
from ..errors.misc_google_business_get_review_import_status_error import (
    MiscGoogleBusinessGetReviewImportStatusErrorBody,
    misc_google_business_get_review_import_status_error_mapper,
)
from ..errors.misc_google_business_get_reviews_error import (
    MiscGoogleBusinessGetReviewsErrorBody,
    misc_google_business_get_reviews_error_mapper,
)
from ..errors.misc_google_business_get_service_list_error import (
    MiscGoogleBusinessGetServiceListErrorBody,
    misc_google_business_get_service_list_error_mapper,
)
from ..errors.misc_google_business_import_reviews_error import (
    MiscGoogleBusinessImportReviewsErrorBody,
    misc_google_business_import_reviews_error_mapper,
)
from ..errors.misc_google_business_list_available_attributes_error import (
    MiscGoogleBusinessListAvailableAttributesErrorBody,
    misc_google_business_list_available_attributes_error_mapper,
)
from ..errors.misc_google_business_list_categories_error import (
    MiscGoogleBusinessListCategoriesErrorBody,
    misc_google_business_list_categories_error_mapper,
)
from ..errors.misc_google_business_list_media_error import (
    MiscGoogleBusinessListMediaErrorBody,
    misc_google_business_list_media_error_mapper,
)
from ..errors.misc_google_business_list_place_action_links_error import (
    MiscGoogleBusinessListPlaceActionLinksErrorBody,
    misc_google_business_list_place_action_links_error_mapper,
)
from ..errors.misc_google_business_list_search_keywords_error import (
    MiscGoogleBusinessListSearchKeywordsErrorBody,
    misc_google_business_list_search_keywords_error_mapper,
)
from ..errors.misc_google_business_reply_to_review_error import (
    MiscGoogleBusinessReplyToReviewErrorBody,
    misc_google_business_reply_to_review_error_mapper,
)
from ..errors.misc_google_business_update_attributes_error import (
    MiscGoogleBusinessUpdateAttributesErrorBody,
    misc_google_business_update_attributes_error_mapper,
)
from ..errors.misc_google_business_update_food_menus_error import (
    MiscGoogleBusinessUpdateFoodMenusErrorBody,
    misc_google_business_update_food_menus_error_mapper,
)
from ..errors.misc_google_business_update_hours_error import (
    MiscGoogleBusinessUpdateHoursErrorBody,
    misc_google_business_update_hours_error_mapper,
)
from ..errors.misc_google_business_update_location_error import (
    MiscGoogleBusinessUpdateLocationErrorBody,
    misc_google_business_update_location_error_mapper,
)
from ..errors.misc_google_business_update_place_action_link_error import (
    MiscGoogleBusinessUpdatePlaceActionLinkErrorBody,
    misc_google_business_update_place_action_link_error_mapper,
)
from ..errors.misc_google_business_update_service_list_error import (
    MiscGoogleBusinessUpdateServiceListErrorBody,
    misc_google_business_update_service_list_error_mapper,
)
from ..errors.misc_instagram_business_discovery_error import (
    MiscInstagramBusinessDiscoveryErrorBody,
    misc_instagram_business_discovery_error_mapper,
)
from ..errors.misc_instagram_delete_comment_error import (
    MiscInstagramDeleteCommentErrorBody,
    misc_instagram_delete_comment_error_mapper,
)
from ..errors.misc_instagram_search_audio_error import (
    MiscInstagramSearchAudioErrorBody,
    misc_instagram_search_audio_error_mapper,
)
from ..errors.misc_instagram_search_locations_error import (
    MiscInstagramSearchLocationsErrorBody,
    misc_instagram_search_locations_error_mapper,
)
from ..errors.misc_linkedin_build_commentary_error import (
    MiscLinkedinBuildCommentaryErrorBody,
    misc_linkedin_build_commentary_error_mapper,
)
from ..errors.misc_linkedin_delete_comment_error import (
    MiscLinkedinDeleteCommentErrorBody,
    misc_linkedin_delete_comment_error_mapper,
)
from ..errors.misc_linkedin_delete_post_error import (
    MiscLinkedinDeletePostErrorBody,
    misc_linkedin_delete_post_error_mapper,
)
from ..errors.misc_linkedin_edit_comment_error import (
    MiscLinkedinEditCommentErrorBody,
    misc_linkedin_edit_comment_error_mapper,
)
from ..errors.misc_linkedin_edit_post_error import MiscLinkedinEditPostErrorBody, misc_linkedin_edit_post_error_mapper
from ..errors.misc_linkedin_get_tags_error import MiscLinkedinGetTagsErrorBody, misc_linkedin_get_tags_error_mapper
from ..errors.misc_linkedin_reshare_post_error import (
    MiscLinkedinResharePostErrorBody,
    misc_linkedin_reshare_post_error_mapper,
)
from ..errors.misc_mastodon_delete_comment_error import (
    MiscMastodonDeleteCommentErrorBody,
    misc_mastodon_delete_comment_error_mapper,
)
from ..errors.misc_mastodon_delete_status_error import (
    MiscMastodonDeleteStatusErrorBody,
    misc_mastodon_delete_status_error_mapper,
)
from ..errors.misc_mastodon_edit_comment_error import (
    MiscMastodonEditCommentErrorBody,
    misc_mastodon_edit_comment_error_mapper,
)
from ..errors.misc_mastodon_edit_status_error import (
    MiscMastodonEditStatusErrorBody,
    misc_mastodon_edit_status_error_mapper,
)
from ..errors.misc_pinterest_delete_pin_error import (
    MiscPinterestDeletePinErrorBody,
    misc_pinterest_delete_pin_error_mapper,
)
from ..errors.misc_pinterest_edit_pin_error import MiscPinterestEditPinErrorBody, misc_pinterest_edit_pin_error_mapper
from ..errors.misc_reddit_delete_comment_error import (
    MiscRedditDeleteCommentErrorBody,
    misc_reddit_delete_comment_error_mapper,
)
from ..errors.misc_reddit_delete_post_error import MiscRedditDeletePostErrorBody, misc_reddit_delete_post_error_mapper
from ..errors.misc_reddit_edit_comment_error import (
    MiscRedditEditCommentErrorBody,
    misc_reddit_edit_comment_error_mapper,
)
from ..errors.misc_reddit_edit_post_error import MiscRedditEditPostErrorBody, misc_reddit_edit_post_error_mapper
from ..errors.misc_reddit_get_post_requirements_error import (
    MiscRedditGetPostRequirementsErrorBody,
    misc_reddit_get_post_requirements_error_mapper,
)
from ..errors.misc_reddit_get_subreddit_flairs_error import (
    MiscRedditGetSubredditFlairsErrorBody,
    misc_reddit_get_subreddit_flairs_error_mapper,
)
from ..errors.misc_slack_delete_message_error import (
    MiscSlackDeleteMessageErrorBody,
    misc_slack_delete_message_error_mapper,
)
from ..errors.misc_slack_edit_message_error import MiscSlackEditMessageErrorBody, misc_slack_edit_message_error_mapper
from ..errors.misc_tiktok_delete_comment_error import (
    MiscTiktokDeleteCommentErrorBody,
    misc_tiktok_delete_comment_error_mapper,
)
from ..errors.misc_tiktok_get_commercial_music_trending_list_error import (
    MiscTiktokGetCommercialMusicTrendingListErrorBody,
    misc_tiktok_get_commercial_music_trending_list_error_mapper,
)
from ..errors.misc_tiktok_get_post_settings_error import (
    MiscTiktokGetPostSettingsErrorBody,
    misc_tiktok_get_post_settings_error_mapper,
)
from ..errors.misc_tiktok_search_locations_error import (
    MiscTiktokSearchLocationsErrorBody,
    misc_tiktok_search_locations_error_mapper,
)
from ..errors.misc_twitter_delete_comment_error import (
    MiscTwitterDeleteCommentErrorBody,
    misc_twitter_delete_comment_error_mapper,
)
from ..errors.misc_twitter_delete_tweet_error import (
    MiscTwitterDeleteTweetErrorBody,
    misc_twitter_delete_tweet_error_mapper,
)
from ..errors.misc_twitter_retweet_error import MiscTwitterRetweetErrorBody, misc_twitter_retweet_error_mapper
from ..errors.misc_twitter_unretweet_error import MiscTwitterUnretweetErrorBody, misc_twitter_unretweet_error_mapper
from ..errors.misc_youtube_add_video_to_playlist_error import (
    MiscYoutubeAddVideoToPlaylistErrorBody,
    misc_youtube_add_video_to_playlist_error_mapper,
)
from ..errors.misc_youtube_create_new_channel_playlist_error import (
    MiscYoutubeCreateNewChannelPlaylistErrorBody,
    misc_youtube_create_new_channel_playlist_error_mapper,
)
from ..errors.misc_youtube_delete_channel_playlist_error import (
    MiscYoutubeDeleteChannelPlaylistErrorBody,
    misc_youtube_delete_channel_playlist_error_mapper,
)
from ..errors.misc_youtube_delete_comment_error import (
    MiscYoutubeDeleteCommentErrorBody,
    misc_youtube_delete_comment_error_mapper,
)
from ..errors.misc_youtube_delete_video_error import (
    MiscYoutubeDeleteVideoErrorBody,
    misc_youtube_delete_video_error_mapper,
)
from ..errors.misc_youtube_delete_video_from_playlist_error import (
    MiscYoutubeDeleteVideoFromPlaylistErrorBody,
    misc_youtube_delete_video_from_playlist_error_mapper,
)
from ..errors.misc_youtube_edit_comment_error import (
    MiscYoutubeEditCommentErrorBody,
    misc_youtube_edit_comment_error_mapper,
)
from ..errors.misc_youtube_edit_video_error import MiscYoutubeEditVideoErrorBody, misc_youtube_edit_video_error_mapper
from ..errors.misc_youtube_get_channel_playlist_error import (
    MiscYoutubeGetChannelPlaylistErrorBody,
    misc_youtube_get_channel_playlist_error_mapper,
)
from ..errors.misc_youtube_get_regions_error import (
    MiscYoutubeGetRegionsErrorBody,
    misc_youtube_get_regions_error_mapper,
)
from ..errors.misc_youtube_get_video_categories_error import (
    MiscYoutubeGetVideoCategoriesErrorBody,
    misc_youtube_get_video_categories_error_mapper,
)
from ..errors.misc_youtube_get_videos_from_playlist_error import (
    MiscYoutubeGetVideosFromPlaylistErrorBody,
    misc_youtube_get_videos_from_playlist_error_mapper,
)
from ..errors.misc_youtube_set_thumbnail_error import (
    MiscYoutubeSetThumbnailErrorBody,
    misc_youtube_set_thumbnail_error_mapper,
)
from ..errors.misc_youtube_update_channel_playlist_error import (
    MiscYoutubeUpdateChannelPlaylistErrorBody,
    misc_youtube_update_channel_playlist_error_mapper,
)
from ..models.api_v1_misc_bluesky_comment_request import (
    ApiV1MiscBlueskyCommentRequest,
    ApiV1MiscBlueskyCommentRequestDict,
)
from ..models.api_v1_misc_bluesky_comment_response import ApiV1MiscBlueskyCommentResponse
from ..models.api_v1_misc_bluesky_post_request import ApiV1MiscBlueskyPostRequest, ApiV1MiscBlueskyPostRequestDict
from ..models.api_v1_misc_bluesky_post_response import ApiV1MiscBlueskyPostResponse
from ..models.api_v1_misc_discord_message_request import (
    ApiV1MiscDiscordMessageRequest,
    ApiV1MiscDiscordMessageRequestDict,
)
from ..models.api_v1_misc_discord_message_response import ApiV1MiscDiscordMessageResponse
from ..models.api_v1_misc_facebook_comment_request import (
    ApiV1MiscFacebookCommentRequest,
    ApiV1MiscFacebookCommentRequestDict,
)
from ..models.api_v1_misc_facebook_comment_request1 import (
    ApiV1MiscFacebookCommentRequest1,
    ApiV1MiscFacebookCommentRequest1Dict,
)
from ..models.api_v1_misc_facebook_comment_response import ApiV1MiscFacebookCommentResponse
from ..models.api_v1_misc_facebook_comment_response1 import ApiV1MiscFacebookCommentResponse1
from ..models.api_v1_misc_facebook_pages_response import ApiV1MiscFacebookPagesResponse
from ..models.api_v1_misc_facebook_post_request import ApiV1MiscFacebookPostRequest, ApiV1MiscFacebookPostRequestDict
from ..models.api_v1_misc_facebook_post_request1 import ApiV1MiscFacebookPostRequest1, ApiV1MiscFacebookPostRequest1Dict
from ..models.api_v1_misc_facebook_post_response import ApiV1MiscFacebookPostResponse
from ..models.api_v1_misc_facebook_post_response1 import ApiV1MiscFacebookPostResponse1
from ..models.api_v1_misc_facebook_recommendations_comments_reply_request import (
    ApiV1MiscFacebookRecommendationsCommentsReplyRequest,
    ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict,
)
from ..models.api_v1_misc_facebook_recommendations_comments_reply_response import (
    ApiV1MiscFacebookRecommendationsCommentsReplyResponse,
)
from ..models.api_v1_misc_facebook_recommendations_comments_response import (
    ApiV1MiscFacebookRecommendationsCommentsResponse,
)
from ..models.api_v1_misc_facebook_recommendations_import_request import (
    ApiV1MiscFacebookRecommendationsImportRequest,
    ApiV1MiscFacebookRecommendationsImportRequestDict,
)
from ..models.api_v1_misc_facebook_recommendations_import_response import ApiV1MiscFacebookRecommendationsImportResponse
from ..models.api_v1_misc_facebook_recommendations_import_response1 import (
    ApiV1MiscFacebookRecommendationsImportResponse1,
)
from ..models.api_v1_misc_facebook_recommendations_reply_request import (
    ApiV1MiscFacebookRecommendationsReplyRequest,
    ApiV1MiscFacebookRecommendationsReplyRequestDict,
)
from ..models.api_v1_misc_facebook_recommendations_reply_response import ApiV1MiscFacebookRecommendationsReplyResponse
from ..models.api_v1_misc_facebook_recommendations_response import ApiV1MiscFacebookRecommendationsResponse
from ..models.api_v1_misc_facebook_recommendations_response1 import ApiV1MiscFacebookRecommendationsResponse1
from ..models.api_v1_misc_facebook_text_format_presets_response import ApiV1MiscFacebookTextFormatPresetsResponse
from ..models.api_v1_misc_facebook_token_debug_response import ApiV1MiscFacebookTokenDebugResponse
from ..models.api_v1_misc_google_business_location_attributes_available_response import (
    ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse,
)
from ..models.api_v1_misc_google_business_location_attributes_request import (
    ApiV1MiscGoogleBusinessLocationAttributesRequest,
    ApiV1MiscGoogleBusinessLocationAttributesRequestDict,
)
from ..models.api_v1_misc_google_business_location_attributes_response import (
    ApiV1MiscGoogleBusinessLocationAttributesResponse,
)
from ..models.api_v1_misc_google_business_location_categories_available_response import (
    ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse,
)
from ..models.api_v1_misc_google_business_location_food_menus_request import (
    ApiV1MiscGoogleBusinessLocationFoodMenusRequest,
    ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict,
)
from ..models.api_v1_misc_google_business_location_food_menus_response import (
    ApiV1MiscGoogleBusinessLocationFoodMenusResponse,
)
from ..models.api_v1_misc_google_business_location_hours_request import (
    ApiV1MiscGoogleBusinessLocationHoursRequest,
    ApiV1MiscGoogleBusinessLocationHoursRequestDict,
)
from ..models.api_v1_misc_google_business_location_hours_response import ApiV1MiscGoogleBusinessLocationHoursResponse
from ..models.api_v1_misc_google_business_location_place_action_links_request import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest,
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict,
)
from ..models.api_v1_misc_google_business_location_place_action_links_request1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1,
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict,
)
from ..models.api_v1_misc_google_business_location_place_action_links_request2 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2,
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict,
)
from ..models.api_v1_misc_google_business_location_place_action_links_response import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse,
)
from ..models.api_v1_misc_google_business_location_place_action_links_response1 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1,
)
from ..models.api_v1_misc_google_business_location_place_action_links_response3 import (
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3,
)
from ..models.api_v1_misc_google_business_location_request import (
    ApiV1MiscGoogleBusinessLocationRequest,
    ApiV1MiscGoogleBusinessLocationRequestDict,
)
from ..models.api_v1_misc_google_business_location_response import ApiV1MiscGoogleBusinessLocationResponse
from ..models.api_v1_misc_google_business_location_search_keywords_response import (
    ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse,
)
from ..models.api_v1_misc_google_business_location_service_list_request import (
    ApiV1MiscGoogleBusinessLocationServiceListRequest,
    ApiV1MiscGoogleBusinessLocationServiceListRequestDict,
)
from ..models.api_v1_misc_google_business_location_service_list_response import (
    ApiV1MiscGoogleBusinessLocationServiceListResponse,
)
from ..models.api_v1_misc_google_business_media_request import (
    ApiV1MiscGoogleBusinessMediaRequest,
    ApiV1MiscGoogleBusinessMediaRequestDict,
)
from ..models.api_v1_misc_google_business_media_request1 import (
    ApiV1MiscGoogleBusinessMediaRequest1,
    ApiV1MiscGoogleBusinessMediaRequest1Dict,
)
from ..models.api_v1_misc_google_business_media_response import ApiV1MiscGoogleBusinessMediaResponse
from ..models.api_v1_misc_google_business_media_response1 import ApiV1MiscGoogleBusinessMediaResponse1
from ..models.api_v1_misc_google_business_media_response2 import ApiV1MiscGoogleBusinessMediaResponse2
from ..models.api_v1_misc_google_business_post_request import (
    ApiV1MiscGoogleBusinessPostRequest,
    ApiV1MiscGoogleBusinessPostRequestDict,
)
from ..models.api_v1_misc_google_business_post_response import ApiV1MiscGoogleBusinessPostResponse
from ..models.api_v1_misc_google_business_reviews_import_request import (
    ApiV1MiscGoogleBusinessReviewsImportRequest,
    ApiV1MiscGoogleBusinessReviewsImportRequestDict,
)
from ..models.api_v1_misc_google_business_reviews_import_response import ApiV1MiscGoogleBusinessReviewsImportResponse
from ..models.api_v1_misc_google_business_reviews_import_response1 import ApiV1MiscGoogleBusinessReviewsImportResponse1
from ..models.api_v1_misc_google_business_reviews_reply_request import (
    ApiV1MiscGoogleBusinessReviewsReplyRequest,
    ApiV1MiscGoogleBusinessReviewsReplyRequestDict,
)
from ..models.api_v1_misc_google_business_reviews_reply_request1 import (
    ApiV1MiscGoogleBusinessReviewsReplyRequest1,
    ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict,
)
from ..models.api_v1_misc_google_business_reviews_reply_response import ApiV1MiscGoogleBusinessReviewsReplyResponse
from ..models.api_v1_misc_google_business_reviews_response import ApiV1MiscGoogleBusinessReviewsResponse
from ..models.api_v1_misc_google_business_reviews_response1 import ApiV1MiscGoogleBusinessReviewsResponse1
from ..models.api_v1_misc_instagram_audio_response import ApiV1MiscInstagramAudioResponse
from ..models.api_v1_misc_instagram_comment_request import (
    ApiV1MiscInstagramCommentRequest,
    ApiV1MiscInstagramCommentRequestDict,
)
from ..models.api_v1_misc_instagram_comment_response import ApiV1MiscInstagramCommentResponse
from ..models.api_v1_misc_instagram_locations_response import ApiV1MiscInstagramLocationsResponse
from ..models.api_v1_misc_instagram_tags_response import ApiV1MiscInstagramTagsResponse
from ..models.api_v1_misc_linkedin_comment_request import (
    ApiV1MiscLinkedinCommentRequest,
    ApiV1MiscLinkedinCommentRequestDict,
)
from ..models.api_v1_misc_linkedin_comment_request1 import (
    ApiV1MiscLinkedinCommentRequest1,
    ApiV1MiscLinkedinCommentRequest1Dict,
)
from ..models.api_v1_misc_linkedin_comment_response import ApiV1MiscLinkedinCommentResponse
from ..models.api_v1_misc_linkedin_comment_response1 import ApiV1MiscLinkedinCommentResponse1
from ..models.api_v1_misc_linkedin_mentions_builder_request import (
    ApiV1MiscLinkedinMentionsBuilderRequest,
    ApiV1MiscLinkedinMentionsBuilderRequestDict,
)
from ..models.api_v1_misc_linkedin_mentions_builder_response import ApiV1MiscLinkedinMentionsBuilderResponse
from ..models.api_v1_misc_linkedin_mentions_tags_response import ApiV1MiscLinkedinMentionsTagsResponse
from ..models.api_v1_misc_linkedin_post_request import ApiV1MiscLinkedinPostRequest, ApiV1MiscLinkedinPostRequestDict
from ..models.api_v1_misc_linkedin_post_request1 import ApiV1MiscLinkedinPostRequest1, ApiV1MiscLinkedinPostRequest1Dict
from ..models.api_v1_misc_linkedin_post_reshare_request import (
    ApiV1MiscLinkedinPostReshareRequest,
    ApiV1MiscLinkedinPostReshareRequestDict,
)
from ..models.api_v1_misc_linkedin_post_reshare_response import ApiV1MiscLinkedinPostReshareResponse
from ..models.api_v1_misc_linkedin_post_response import ApiV1MiscLinkedinPostResponse
from ..models.api_v1_misc_linkedin_post_response1 import ApiV1MiscLinkedinPostResponse1
from ..models.api_v1_misc_mastodon_comment_request import (
    ApiV1MiscMastodonCommentRequest,
    ApiV1MiscMastodonCommentRequestDict,
)
from ..models.api_v1_misc_mastodon_comment_request1 import (
    ApiV1MiscMastodonCommentRequest1,
    ApiV1MiscMastodonCommentRequest1Dict,
)
from ..models.api_v1_misc_mastodon_comment_response import ApiV1MiscMastodonCommentResponse
from ..models.api_v1_misc_mastodon_comment_response1 import ApiV1MiscMastodonCommentResponse1
from ..models.api_v1_misc_mastodon_status_request import (
    ApiV1MiscMastodonStatusRequest,
    ApiV1MiscMastodonStatusRequestDict,
)
from ..models.api_v1_misc_mastodon_status_request1 import (
    ApiV1MiscMastodonStatusRequest1,
    ApiV1MiscMastodonStatusRequest1Dict,
)
from ..models.api_v1_misc_mastodon_status_response import ApiV1MiscMastodonStatusResponse
from ..models.api_v1_misc_mastodon_status_response1 import ApiV1MiscMastodonStatusResponse1
from ..models.api_v1_misc_pinterest_pin_request import ApiV1MiscPinterestPinRequest, ApiV1MiscPinterestPinRequestDict
from ..models.api_v1_misc_pinterest_pin_request1 import ApiV1MiscPinterestPinRequest1, ApiV1MiscPinterestPinRequest1Dict
from ..models.api_v1_misc_pinterest_pin_response import ApiV1MiscPinterestPinResponse
from ..models.api_v1_misc_pinterest_pin_response1 import ApiV1MiscPinterestPinResponse1
from ..models.api_v1_misc_reddit_comment_request import ApiV1MiscRedditCommentRequest, ApiV1MiscRedditCommentRequestDict
from ..models.api_v1_misc_reddit_comment_request1 import (
    ApiV1MiscRedditCommentRequest1,
    ApiV1MiscRedditCommentRequest1Dict,
)
from ..models.api_v1_misc_reddit_comment_response import ApiV1MiscRedditCommentResponse
from ..models.api_v1_misc_reddit_comment_response1 import ApiV1MiscRedditCommentResponse1
from ..models.api_v1_misc_reddit_post_request import ApiV1MiscRedditPostRequest, ApiV1MiscRedditPostRequestDict
from ..models.api_v1_misc_reddit_post_request1 import ApiV1MiscRedditPostRequest1, ApiV1MiscRedditPostRequest1Dict
from ..models.api_v1_misc_reddit_post_requirements_response import ApiV1MiscRedditPostRequirementsResponse
from ..models.api_v1_misc_reddit_post_response import ApiV1MiscRedditPostResponse
from ..models.api_v1_misc_reddit_post_response1 import ApiV1MiscRedditPostResponse1
from ..models.api_v1_misc_reddit_subreddit_flairs_response import ApiV1MiscRedditSubredditFlairsResponse
from ..models.api_v1_misc_slack_message_request import ApiV1MiscSlackMessageRequest, ApiV1MiscSlackMessageRequestDict
from ..models.api_v1_misc_slack_message_request1 import ApiV1MiscSlackMessageRequest1, ApiV1MiscSlackMessageRequest1Dict
from ..models.api_v1_misc_slack_message_response import ApiV1MiscSlackMessageResponse
from ..models.api_v1_misc_slack_message_response1 import ApiV1MiscSlackMessageResponse1
from ..models.api_v1_misc_tiktok_cml_trending_list_response import ApiV1MiscTiktokCmlTrendingListResponse
from ..models.api_v1_misc_tiktok_comment_request import ApiV1MiscTiktokCommentRequest, ApiV1MiscTiktokCommentRequestDict
from ..models.api_v1_misc_tiktok_comment_response import ApiV1MiscTiktokCommentResponse
from ..models.api_v1_misc_tiktok_locations_response import ApiV1MiscTiktokLocationsResponse
from ..models.api_v1_misc_tiktok_post_settings_response import ApiV1MiscTiktokPostSettingsResponse
from ..models.api_v1_misc_twitter_comment_request import (
    ApiV1MiscTwitterCommentRequest,
    ApiV1MiscTwitterCommentRequestDict,
)
from ..models.api_v1_misc_twitter_comment_response import ApiV1MiscTwitterCommentResponse
from ..models.api_v1_misc_twitter_retweet_request import (
    ApiV1MiscTwitterRetweetRequest,
    ApiV1MiscTwitterRetweetRequestDict,
)
from ..models.api_v1_misc_twitter_retweet_response import ApiV1MiscTwitterRetweetResponse
from ..models.api_v1_misc_twitter_tweet_request import ApiV1MiscTwitterTweetRequest, ApiV1MiscTwitterTweetRequestDict
from ..models.api_v1_misc_twitter_tweet_response import ApiV1MiscTwitterTweetResponse
from ..models.api_v1_misc_youtube_comment_request import (
    ApiV1MiscYoutubeCommentRequest,
    ApiV1MiscYoutubeCommentRequestDict,
)
from ..models.api_v1_misc_youtube_comment_request1 import (
    ApiV1MiscYoutubeCommentRequest1,
    ApiV1MiscYoutubeCommentRequest1Dict,
)
from ..models.api_v1_misc_youtube_comment_response import ApiV1MiscYoutubeCommentResponse
from ..models.api_v1_misc_youtube_comment_response1 import ApiV1MiscYoutubeCommentResponse1
from ..models.api_v1_misc_youtube_playlist_items_request import (
    ApiV1MiscYoutubePlaylistItemsRequest,
    ApiV1MiscYoutubePlaylistItemsRequestDict,
)
from ..models.api_v1_misc_youtube_playlist_items_response import ApiV1MiscYoutubePlaylistItemsResponse
from ..models.api_v1_misc_youtube_playlist_items_response1 import ApiV1MiscYoutubePlaylistItemsResponse1
from ..models.api_v1_misc_youtube_playlist_request import (
    ApiV1MiscYoutubePlaylistRequest,
    ApiV1MiscYoutubePlaylistRequestDict,
)
from ..models.api_v1_misc_youtube_playlist_request1 import (
    ApiV1MiscYoutubePlaylistRequest1,
    ApiV1MiscYoutubePlaylistRequest1Dict,
)
from ..models.api_v1_misc_youtube_playlist_response import ApiV1MiscYoutubePlaylistResponse
from ..models.api_v1_misc_youtube_playlist_response1 import ApiV1MiscYoutubePlaylistResponse1
from ..models.api_v1_misc_youtube_regions_response import ApiV1MiscYoutubeRegionsResponse
from ..models.api_v1_misc_youtube_thumbnail_request import (
    ApiV1MiscYoutubeThumbnailRequest,
    ApiV1MiscYoutubeThumbnailRequestDict,
)
from ..models.api_v1_misc_youtube_thumbnail_response import ApiV1MiscYoutubeThumbnailResponse
from ..models.api_v1_misc_youtube_video_categories_response import ApiV1MiscYoutubeVideoCategoriesResponse
from ..models.api_v1_misc_youtube_video_request import ApiV1MiscYoutubeVideoRequest, ApiV1MiscYoutubeVideoRequestDict
from ..models.api_v1_misc_youtube_video_request1 import ApiV1MiscYoutubeVideoRequest1, ApiV1MiscYoutubeVideoRequest1Dict
from ..models.api_v1_misc_youtube_video_response import ApiV1MiscYoutubeVideoResponse
from ..models.api_v1_misc_youtube_video_response1 import ApiV1MiscYoutubeVideoResponse1
from ..models.enums.audio_type import AudioTypeOrStr
from ..models.enums.date_range import DateRange, DateRangeOrStr
from ..models.enums.field3 import Field3OrStr
from ..models.enums.field_bundle_social_misc_api import FieldBundleSocialMiscApiOrStr
from ..models.enums.genre import Genre, GenreOrStr
from ..models.enums.scope import Scope, ScopeOrStr
from ..models.enums.view import View, ViewOrStr
from ..server.server import Server


class Misc:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MiscWithRawResponse(client, server, auth)

    def misc_bluesky_delete_comment(
        self,
        *,
        body: ApiV1MiscBlueskyCommentRequest | ApiV1MiscBlueskyCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscBlueskyCommentResponse:
        """Permanently delete a published Bluesky reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscBlueskyComment400Error1 |
                ApiV1MiscBlueskyComment401Error1 | ApiV1MiscBlueskyComment403Error1 | ApiV1MiscBlueskyComment404Error1 |
                ApiV1MiscBlueskyComment429Error1 | ApiV1MiscBlueskyComment500Error1 | ApiV1MiscBlueskyComment502Error1 |
                ApiV1MiscBlueskyComment503Error1 | ApiV1MiscBlueskyComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_bluesky_delete_comment(body=body, request_options=request_options))

    def misc_bluesky_delete_post(
        self,
        *,
        body: ApiV1MiscBlueskyPostRequest | ApiV1MiscBlueskyPostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscBlueskyPostResponse:
        """Permanently delete a published Bluesky post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscBlueskyPost400Error1 |
                ApiV1MiscBlueskyPost401Error1 | ApiV1MiscBlueskyPost403Error1 | ApiV1MiscBlueskyPost404Error1 |
                ApiV1MiscBlueskyPost429Error1 | ApiV1MiscBlueskyPost500Error1 | ApiV1MiscBlueskyPost502Error1 |
                ApiV1MiscBlueskyPost503Error1 | ApiV1MiscBlueskyPost504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_bluesky_delete_post(body=body, request_options=request_options))

    def misc_discord_delete_message(
        self,
        *,
        body: ApiV1MiscDiscordMessageRequest | ApiV1MiscDiscordMessageRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscDiscordMessageResponse:
        """Permanently delete a published Discord message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscDiscordMessage400Error1 |
                ApiV1MiscDiscordMessage401Error1 | ApiV1MiscDiscordMessage403Error1 | ApiV1MiscDiscordMessage404Error1 |
                ApiV1MiscDiscordMessage429Error1 | ApiV1MiscDiscordMessage500Error1 | ApiV1MiscDiscordMessage502Error1 |
                ApiV1MiscDiscordMessage503Error1 | ApiV1MiscDiscordMessage504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_discord_delete_message(body=body, request_options=request_options))

    def misc_facebook_delete_comment(
        self,
        *,
        body: ApiV1MiscFacebookCommentRequest1 | ApiV1MiscFacebookCommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookCommentResponse1:
        """Permanently delete a published Facebook comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookComment400Error1 |
                ApiV1MiscFacebookComment401Error1 | ApiV1MiscFacebookComment403Error1 |
                ApiV1MiscFacebookComment404Error1 | ApiV1MiscFacebookComment429Error1 |
                ApiV1MiscFacebookComment500Error1 | ApiV1MiscFacebookComment502Error1 |
                ApiV1MiscFacebookComment503Error1 | ApiV1MiscFacebookComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_facebook_delete_comment(body=body, request_options=request_options))

    def misc_facebook_delete_post(
        self,
        *,
        body: ApiV1MiscFacebookPostRequest1 | ApiV1MiscFacebookPostRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookPostResponse1:
        """Permanently delete a published Facebook post or reel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookPost400Error1 |
                ApiV1MiscFacebookPost401Error1 | ApiV1MiscFacebookPost403Error1 | ApiV1MiscFacebookPost404Error1 |
                ApiV1MiscFacebookPost429Error1 | ApiV1MiscFacebookPost500Error1 | ApiV1MiscFacebookPost502Error1 |
                ApiV1MiscFacebookPost503Error1 | ApiV1MiscFacebookPost504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_facebook_delete_post(body=body, request_options=request_options))

    def misc_facebook_edit_comment(
        self,
        *,
        body: ApiV1MiscFacebookCommentRequest | ApiV1MiscFacebookCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookCommentResponse:
        """Update the text content of a published Facebook comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookComment400Error1 |
                ApiV1MiscFacebookComment401Error1 | ApiV1MiscFacebookComment403Error1 |
                ApiV1MiscFacebookComment404Error1 | ApiV1MiscFacebookComment429Error1 |
                ApiV1MiscFacebookComment500Error1 | ApiV1MiscFacebookComment502Error1 |
                ApiV1MiscFacebookComment503Error1 | ApiV1MiscFacebookComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_facebook_edit_comment(body=body, request_options=request_options))

    def misc_facebook_edit_post(
        self,
        *,
        body: ApiV1MiscFacebookPostRequest | ApiV1MiscFacebookPostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookPostResponse:
        """Update the message/content of a published Facebook post or reel. Note: Only text content can be edited, media
        cannot be changed.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookPost400Error1 |
                ApiV1MiscFacebookPost401Error1 | ApiV1MiscFacebookPost403Error1 | ApiV1MiscFacebookPost404Error1 |
                ApiV1MiscFacebookPost429Error1 | ApiV1MiscFacebookPost500Error1 | ApiV1MiscFacebookPost502Error1 |
                ApiV1MiscFacebookPost503Error1 | ApiV1MiscFacebookPost504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_facebook_edit_post(body=body, request_options=request_options))

    def misc_facebook_get_recommendation_by_id(
        self, recommendation_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookRecommendationsResponse1:
        """Retrieve one imported Facebook recommendation with its rating, text, author, and existing replies.

        Args:
            recommendation_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookRecommendations400Error1 |
                ApiV1MiscFacebookRecommendations401Error1 | ApiV1MiscFacebookRecommendations403Error1 |
                ApiV1MiscFacebookRecommendations404Error1 | ApiV1MiscFacebookRecommendations429Error1 |
                ApiV1MiscFacebookRecommendations500Error1 | ApiV1MiscFacebookRecommendations502Error1 |
                ApiV1MiscFacebookRecommendations503Error1 | ApiV1MiscFacebookRecommendations504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_facebook_get_recommendation_by_id(
                recommendation_id, team_id, request_options=request_options
            ),
        )

    def misc_facebook_get_recommendation_comments(
        self, recommendation_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookRecommendationsCommentsResponse:
        """List the comments in a Facebook recommendation thread so you can see the full conversation before replying.

        Args:
            recommendation_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscFacebookRecommendationsComments400Error1 | ApiV1MiscFacebookRecommendationsComments401Error1
                | ApiV1MiscFacebookRecommendationsComments403Error1 | ApiV1MiscFacebookRecommendationsComments404Error1
                | ApiV1MiscFacebookRecommendationsComments429Error1 | ApiV1MiscFacebookRecommendationsComments500Error1
                | ApiV1MiscFacebookRecommendationsComments502Error1 | ApiV1MiscFacebookRecommendationsComments503Error1
                | ApiV1MiscFacebookRecommendationsComments504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_facebook_get_recommendation_comments(
                recommendation_id, team_id, request_options=request_options
            ),
        )

    def misc_facebook_get_recommendation_import_by_id(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookRecommendationsImportResponse:
        """Check the status, progress, and result of a single Facebook recommendations import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookRecommendationsImport400Error1
                | ApiV1MiscFacebookRecommendationsImport401Error1 | ApiV1MiscFacebookRecommendationsImport403Error1 |
                ApiV1MiscFacebookRecommendationsImport404Error1 | ApiV1MiscFacebookRecommendationsImport429Error1 |
                ApiV1MiscFacebookRecommendationsImport500Error1 | ApiV1MiscFacebookRecommendationsImport502Error1 |
                ApiV1MiscFacebookRecommendationsImport503Error1 | ApiV1MiscFacebookRecommendationsImport504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.misc_facebook_get_recommendation_import_by_id(
                import_id, request_options=request_options
            ),
        )

    def misc_facebook_get_recommendation_import_status(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookRecommendationsImportResponse1:
        """List Facebook recommendation import jobs for a team so you can monitor which imports are queued, running,
        finished, or failed.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookRecommendationsImport400Error1
                | ApiV1MiscFacebookRecommendationsImport401Error1 | ApiV1MiscFacebookRecommendationsImport403Error1 |
                ApiV1MiscFacebookRecommendationsImport404Error1 | ApiV1MiscFacebookRecommendationsImport429Error1 |
                ApiV1MiscFacebookRecommendationsImport500Error1 | ApiV1MiscFacebookRecommendationsImport502Error1 |
                ApiV1MiscFacebookRecommendationsImport503Error1 | ApiV1MiscFacebookRecommendationsImport504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.misc_facebook_get_recommendation_import_status(
                team_id, request_options=request_options
            ),
        )

    def misc_facebook_get_recommendations(
        self,
        team_id: str,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookRecommendationsResponse:
        """List the Facebook Page recommendations pulled in by an import, with paging and your remaining import
        capacity. Use it to build a reputation-management inbox.

        Args:
            team_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookRecommendations400Error1 |
                ApiV1MiscFacebookRecommendations401Error1 | ApiV1MiscFacebookRecommendations403Error1 |
                ApiV1MiscFacebookRecommendations404Error1 | ApiV1MiscFacebookRecommendations429Error1 |
                ApiV1MiscFacebookRecommendations500Error1 | ApiV1MiscFacebookRecommendations502Error1 |
                ApiV1MiscFacebookRecommendations503Error1 | ApiV1MiscFacebookRecommendations504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_facebook_get_recommendations(
                team_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def misc_facebook_get_text_format_presets(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookTextFormatPresetsResponse:
        """Return the text background presets (colored statuses) that can be passed as data.FACEBOOK.textFormatPresetId,
        grouped by whether each one renders as a flat color, a gradient, or an illustration. Facebook exposes no
        endpoint of its own for this, so read the list from here instead of hardcoding IDs. Any other numeric ID is also
        accepted and passed straight through to Facebook.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookTextFormatPresets400Error1 |
                ApiV1MiscFacebookTextFormatPresets401Error1 | ApiV1MiscFacebookTextFormatPresets403Error1 |
                ApiV1MiscFacebookTextFormatPresets404Error1 | ApiV1MiscFacebookTextFormatPresets429Error1 |
                ApiV1MiscFacebookTextFormatPresets500Error1 | ApiV1MiscFacebookTextFormatPresets502Error1 |
                ApiV1MiscFacebookTextFormatPresets503Error1 | ApiV1MiscFacebookTextFormatPresets504Error1 |
                RawError``."""
        return unwrap(self._with_raw_response.misc_facebook_get_text_format_presets(request_options=request_options))

    def misc_facebook_get_token_debug(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookTokenDebugResponse:
        """Inspect a connected Facebook account's access token, including its scopes and expiry. Use it to diagnose
        permission errors when publishing fails.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookTokenDebug400Error1 |
                ApiV1MiscFacebookTokenDebug401Error1 | ApiV1MiscFacebookTokenDebug403Error1 |
                ApiV1MiscFacebookTokenDebug404Error1 | ApiV1MiscFacebookTokenDebug429Error1 |
                ApiV1MiscFacebookTokenDebug500Error1 | ApiV1MiscFacebookTokenDebug502Error1 |
                ApiV1MiscFacebookTokenDebug503Error1 | ApiV1MiscFacebookTokenDebug504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_facebook_get_token_debug(team_id, request_options=request_options))

    def misc_facebook_import_recommendations(
        self,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsImportRequest | ApiV1MiscFacebookRecommendationsImportRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookRecommendationsImportResponse:
        """Kick off an asynchronous import that pulls recommendations left on your Facebook Page into bundle.social so
        you can read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is
                ``ApiV1MiscFacebookRecommendationsImport400Error1 | ApiV1MiscFacebookRecommendationsImport401Error1 |
                ApiV1MiscFacebookRecommendationsImport403Error1 | ApiV1MiscFacebookRecommendationsImport404Error1 |
                ApiV1MiscFacebookRecommendationsImport409Error1 | ApiV1MiscFacebookRecommendationsImport429Error1 |
                ApiV1MiscFacebookRecommendationsImport500Error1 | ApiV1MiscFacebookRecommendationsImport502Error1 |
                ApiV1MiscFacebookRecommendationsImport503Error1 | ApiV1MiscFacebookRecommendationsImport504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.misc_facebook_import_recommendations(body=body, request_options=request_options)
        )

    def misc_facebook_reply_to_recommendation(
        self,
        recommendation_id: str,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsReplyRequest | ApiV1MiscFacebookRecommendationsReplyRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookRecommendationsReplyResponse:
        """Publish a Page reply to a Facebook recommendation. Use it to respond to reviews programmatically instead of
        through Meta Business Suite.

        Args:
            recommendation_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookRecommendationsReply400Error1
                | ApiV1MiscFacebookRecommendationsReply401Error1 | ApiV1MiscFacebookRecommendationsReply403Error1 |
                ApiV1MiscFacebookRecommendationsReply404Error1 | ApiV1MiscFacebookRecommendationsReply429Error1 |
                ApiV1MiscFacebookRecommendationsReply500Error1 | ApiV1MiscFacebookRecommendationsReply502Error1 |
                ApiV1MiscFacebookRecommendationsReply503Error1 | ApiV1MiscFacebookRecommendationsReply504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.misc_facebook_reply_to_recommendation(
                recommendation_id, body=body, request_options=request_options
            ),
        )

    def misc_facebook_reply_to_recommendation_comment(
        self,
        recommendation_id: str,
        comment_id: str,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsCommentsReplyRequest
            | ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookRecommendationsCommentsReplyResponse:
        """Publish a reply to a specific comment inside a Facebook recommendation thread.

        Args:
            recommendation_id: Value sent with the request.
            comment_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscFacebookRecommendationsCommentsReply400Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply401Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply403Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply404Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply429Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply500Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply502Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply503Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_facebook_reply_to_recommendation_comment(
                recommendation_id, comment_id, body=body, request_options=request_options
            ),
        )

    def misc_facebook_search_pages(
        self, team_id: str, q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookPagesResponse:
        """Searches public Facebook Pages and returns IDs that can be inserted into Facebook Page mention tokens.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search Facebook Pages
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookPages400Error1 |
                ApiV1MiscFacebookPages401Error1 | ApiV1MiscFacebookPages403Error1 | ApiV1MiscFacebookPages404Error1 |
                ApiV1MiscFacebookPages429Error1 | ApiV1MiscFacebookPages500Error1 | ApiV1MiscFacebookPages502Error1 |
                ApiV1MiscFacebookPages503Error1 | ApiV1MiscFacebookPages504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_facebook_search_pages(team_id, q, limit=limit, request_options=request_options)
        )

    def misc_google_business_add_media(
        self,
        *,
        body: ApiV1MiscGoogleBusinessMediaRequest | ApiV1MiscGoogleBusinessMediaRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessMediaResponse:
        """Publish a photo or video to your Google Business Profile from a bundle.social upload, tagged with a category
        such as exterior, interior, or product. Fresh photos are a local ranking and conversion signal.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessMedia400Error1 |
                ApiV1MiscGoogleBusinessMedia401Error1 | ApiV1MiscGoogleBusinessMedia403Error1 |
                ApiV1MiscGoogleBusinessMedia404Error1 | ApiV1MiscGoogleBusinessMedia429Error1 |
                ApiV1MiscGoogleBusinessMedia500Error1 | ApiV1MiscGoogleBusinessMedia502Error1 |
                ApiV1MiscGoogleBusinessMedia503Error1 | ApiV1MiscGoogleBusinessMedia504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_add_media(body=body, request_options=request_options)
        )

    def misc_google_business_create_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1:
        """Add an action link such as Book, Order online, or Reserve to your Google Business Profile so customers can
        convert straight from the listing.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_create_place_action_link(
                body=body, request_options=request_options
            ),
        )

    def misc_google_business_delete_media(
        self,
        *,
        body: ApiV1MiscGoogleBusinessMediaRequest1 | ApiV1MiscGoogleBusinessMediaRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessMediaResponse2:
        """Remove a photo or video from your Google Business Profile.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessMedia400Error1 |
                ApiV1MiscGoogleBusinessMedia401Error1 | ApiV1MiscGoogleBusinessMedia403Error1 |
                ApiV1MiscGoogleBusinessMedia404Error1 | ApiV1MiscGoogleBusinessMedia429Error1 |
                ApiV1MiscGoogleBusinessMedia500Error1 | ApiV1MiscGoogleBusinessMedia502Error1 |
                ApiV1MiscGoogleBusinessMedia503Error1 | ApiV1MiscGoogleBusinessMedia504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_delete_media(body=body, request_options=request_options)
        )

    def misc_google_business_delete_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3:
        """Remove an action link from your Google Business Profile, for example when a booking URL is retired.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_delete_place_action_link(
                body=body, request_options=request_options
            ),
        )

    def misc_google_business_delete_post(
        self,
        *,
        body: ApiV1MiscGoogleBusinessPostRequest | ApiV1MiscGoogleBusinessPostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessPostResponse:
        """Permanently delete a published Google Business post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessPost400Error1 |
                ApiV1MiscGoogleBusinessPost401Error1 | ApiV1MiscGoogleBusinessPost403Error1 |
                ApiV1MiscGoogleBusinessPost404Error1 | ApiV1MiscGoogleBusinessPost429Error1 |
                ApiV1MiscGoogleBusinessPost500Error1 | ApiV1MiscGoogleBusinessPost502Error1 |
                ApiV1MiscGoogleBusinessPost503Error1 | ApiV1MiscGoogleBusinessPost504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_delete_post(body=body, request_options=request_options)
        )

    def misc_google_business_delete_review_reply(
        self,
        review_id: str,
        *,
        body: (
            ApiV1MiscGoogleBusinessReviewsReplyRequest1 | ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessReviewsReplyResponse:
        """Remove your owner reply from a Google Review, leaving the customer's review in place.

        Args:
            review_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviewsReply400Error1 |
                ApiV1MiscGoogleBusinessReviewsReply401Error1 | ApiV1MiscGoogleBusinessReviewsReply403Error1 |
                ApiV1MiscGoogleBusinessReviewsReply404Error1 | ApiV1MiscGoogleBusinessReviewsReply429Error1 |
                ApiV1MiscGoogleBusinessReviewsReply500Error1 | ApiV1MiscGoogleBusinessReviewsReply502Error1 |
                ApiV1MiscGoogleBusinessReviewsReply503Error1 | ApiV1MiscGoogleBusinessReviewsReply504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_delete_review_reply(
                review_id, body=body, request_options=request_options
            ),
        )

    def misc_google_business_get_attributes(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscGoogleBusinessLocationAttributesResponse:
        """Retrieve the attributes currently set on your Google Business Profile location, such as accessibility,
        payment options, or amenities.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationAttributes400Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes401Error1 | ApiV1MiscGoogleBusinessLocationAttributes403Error1
                | ApiV1MiscGoogleBusinessLocationAttributes404Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes429Error1 | ApiV1MiscGoogleBusinessLocationAttributes500Error1
                | ApiV1MiscGoogleBusinessLocationAttributes502Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes503Error1 | ApiV1MiscGoogleBusinessLocationAttributes504Error1
                | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_get_attributes(team_id, request_options=request_options)
        )

    def misc_google_business_get_food_menus(
        self,
        team_id: str,
        *,
        fields: list[Field3OrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationFoodMenusResponse:
        """Use typed query param ``fields``. Supports both comma-separated values (``fields=name,menus``) and repeated
        params (``fields=name&fields=menus``).

        Args:
            team_id: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationFoodMenus400Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus401Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus403Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus404Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus429Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus500Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus502Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus503Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_get_food_menus(
                team_id, fields=fields, request_options=request_options
            ),
        )

    def misc_google_business_get_location(
        self,
        team_id: str,
        *,
        fields: list[FieldBundleSocialMiscApiOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationResponse:
        """Use typed query param ``fields``. Supports both comma-separated values (``fields=name,title``) and repeated
        params (``fields=name&fields=title``).

        Args:
            team_id: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessLocation400Error1 |
                ApiV1MiscGoogleBusinessLocation401Error1 | ApiV1MiscGoogleBusinessLocation403Error1 |
                ApiV1MiscGoogleBusinessLocation404Error1 | ApiV1MiscGoogleBusinessLocation429Error1 |
                ApiV1MiscGoogleBusinessLocation500Error1 | ApiV1MiscGoogleBusinessLocation502Error1 |
                ApiV1MiscGoogleBusinessLocation503Error1 | ApiV1MiscGoogleBusinessLocation504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_get_location(
                team_id, fields=fields, request_options=request_options
            ),
        )

    def misc_google_business_get_review_by_id(
        self, review_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscGoogleBusinessReviewsResponse1:
        """Retrieve one imported Google Review with its star rating, text, reviewer, and any existing owner reply.

        Args:
            review_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviews400Error1 |
                ApiV1MiscGoogleBusinessReviews401Error1 | ApiV1MiscGoogleBusinessReviews403Error1 |
                ApiV1MiscGoogleBusinessReviews404Error1 | ApiV1MiscGoogleBusinessReviews429Error1 |
                ApiV1MiscGoogleBusinessReviews500Error1 | ApiV1MiscGoogleBusinessReviews502Error1 |
                ApiV1MiscGoogleBusinessReviews503Error1 | ApiV1MiscGoogleBusinessReviews504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_get_review_by_id(
                review_id, team_id, request_options=request_options
            ),
        )

    def misc_google_business_get_review_import_by_id(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscGoogleBusinessReviewsImportResponse:
        """Check the status, progress, and result of a single Google Reviews import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviewsImport400Error1 |
                ApiV1MiscGoogleBusinessReviewsImport401Error1 | ApiV1MiscGoogleBusinessReviewsImport403Error1 |
                ApiV1MiscGoogleBusinessReviewsImport404Error1 | ApiV1MiscGoogleBusinessReviewsImport429Error1 |
                ApiV1MiscGoogleBusinessReviewsImport500Error1 | ApiV1MiscGoogleBusinessReviewsImport502Error1 |
                ApiV1MiscGoogleBusinessReviewsImport503Error1 | ApiV1MiscGoogleBusinessReviewsImport504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_get_review_import_by_id(
                import_id, request_options=request_options
            ),
        )

    def misc_google_business_get_review_import_status(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscGoogleBusinessReviewsImportResponse1:
        """List Google Review import jobs for a team so you can monitor which imports are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviewsImport400Error1 |
                ApiV1MiscGoogleBusinessReviewsImport401Error1 | ApiV1MiscGoogleBusinessReviewsImport403Error1 |
                ApiV1MiscGoogleBusinessReviewsImport404Error1 | ApiV1MiscGoogleBusinessReviewsImport429Error1 |
                ApiV1MiscGoogleBusinessReviewsImport500Error1 | ApiV1MiscGoogleBusinessReviewsImport502Error1 |
                ApiV1MiscGoogleBusinessReviewsImport503Error1 | ApiV1MiscGoogleBusinessReviewsImport504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_get_review_import_status(
                team_id, request_options=request_options
            ),
        )

    def misc_google_business_get_reviews(
        self,
        team_id: str,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessReviewsResponse:
        """List the Google Reviews pulled in by an import, with paging and your remaining import capacity. Use it to
        build a review inbox or monitor rating trends.

        Args:
            team_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviews400Error1 |
                ApiV1MiscGoogleBusinessReviews401Error1 | ApiV1MiscGoogleBusinessReviews403Error1 |
                ApiV1MiscGoogleBusinessReviews404Error1 | ApiV1MiscGoogleBusinessReviews429Error1 |
                ApiV1MiscGoogleBusinessReviews500Error1 | ApiV1MiscGoogleBusinessReviews502Error1 |
                ApiV1MiscGoogleBusinessReviews503Error1 | ApiV1MiscGoogleBusinessReviews504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_get_reviews(
                team_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def misc_google_business_get_service_list(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscGoogleBusinessLocationServiceListResponse:
        """Retrieve the services listed on your Google Business Profile, including custom services and prices.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationServiceList400Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList401Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList403Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList404Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList429Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList500Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList502Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList503Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_get_service_list(team_id, request_options=request_options)
        )

    def misc_google_business_import_reviews(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessReviewsImportRequest | ApiV1MiscGoogleBusinessReviewsImportRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessReviewsImportResponse:
        """Kick off an asynchronous import that pulls your Google Business Profile reviews into bundle.social so you can
        read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessReviewsImport400Error1 | ApiV1MiscGoogleBusinessReviewsImport401Error1 |
                ApiV1MiscGoogleBusinessReviewsImport403Error1 | ApiV1MiscGoogleBusinessReviewsImport404Error1 |
                ApiV1MiscGoogleBusinessReviewsImport409Error1 | ApiV1MiscGoogleBusinessReviewsImport429Error1 |
                ApiV1MiscGoogleBusinessReviewsImport500Error1 | ApiV1MiscGoogleBusinessReviewsImport502Error1 |
                ApiV1MiscGoogleBusinessReviewsImport503Error1 | ApiV1MiscGoogleBusinessReviewsImport504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_import_reviews(body=body, request_options=request_options)
        )

    def misc_google_business_list_available_attributes(
        self,
        team_id: str,
        *,
        language_code: str | None = None,
        region_code: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse:
        """List the attributes Google allows for your location's category and country. Check this before updating
        attributes, since the valid set differs per business category. ``regionCode``/``languageCode`` are honoured by
        looking the attributes up through the location's primary category; when that category or a region code cannot be
        resolved (common for service-area businesses with no storefront address) the location's own defaults are
        returned instead and ``lookup.by`` comes back as ``location``, meaning those two parameters were not applied.

        Args:
            team_id: Value sent with the request.
            language_code: Value sent with the request.
            region_code: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_list_available_attributes(
                team_id,
                language_code=language_code,
                region_code=region_code,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def misc_google_business_list_categories(
        self,
        team_id: str,
        region_code: str,
        language_code: str,
        *,
        names: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = 50,
        page_token: str | None = None,
        view: ViewOrStr | None = View.BASIC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse:
        """Requires ``regionCode`` and ``languageCode``. Default ``view=BASIC``. Optional ``names`` fetches exact
        category IDs through ``categories:batchGet``; otherwise ``filter`` supports ``displayName`` prefix search.

        Args:
            team_id: Value sent with the request.
            region_code: Value sent with the request.
            language_code: Value sent with the request.
            names: Value sent with the request.
            filter_: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            view: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_list_categories(
                team_id,
                region_code,
                language_code,
                names=names,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                view=view,
                request_options=request_options,
            ),
        )

    def misc_google_business_list_media(
        self,
        team_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessMediaResponse1:
        """List the photos and videos on your Google Business Profile, with paging. Use it to audit which images are
        live before adding or removing media.

        Args:
            team_id: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessMedia400Error1 |
                ApiV1MiscGoogleBusinessMedia401Error1 | ApiV1MiscGoogleBusinessMedia403Error1 |
                ApiV1MiscGoogleBusinessMedia404Error1 | ApiV1MiscGoogleBusinessMedia429Error1 |
                ApiV1MiscGoogleBusinessMedia500Error1 | ApiV1MiscGoogleBusinessMedia502Error1 |
                ApiV1MiscGoogleBusinessMedia503Error1 | ApiV1MiscGoogleBusinessMedia504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_list_media(
                team_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def misc_google_business_list_place_action_links(
        self,
        team_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse:
        """List the action links on your Google Business Profile, such as booking, ordering, or reservation URLs.

        Args:
            team_id: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_list_place_action_links(
                team_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def misc_google_business_list_search_keywords(
        self,
        team_id: str,
        start_month: str,
        end_month: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse:
        """Monthly search keyword impressions for your selected location. ``startMonth``/``endMonth`` are inclusive
        ``YYYY-MM`` values; counts are aggregated across the whole range, so request a single month for a per-month
        figure. Each keyword returns either an exact ``value`` or a ``threshold``, meaning the real count is below that
        number: low-volume keywords are only ever reported as a threshold, so treat a null ``value`` as suppressed
        rather than zero. Counts are unique users, not raw impressions. Paginated with ``pageToken``/``nextPageToken``,
        max ``pageSize`` 100.

        Args:
            team_id: Value sent with the request.
            start_month: Month in ``YYYY-MM`` format, inclusive.
            end_month: Month in ``YYYY-MM`` format, inclusive.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_list_search_keywords(
                team_id,
                start_month,
                end_month,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def misc_google_business_reply_to_review(
        self,
        review_id: str,
        *,
        body: ApiV1MiscGoogleBusinessReviewsReplyRequest | ApiV1MiscGoogleBusinessReviewsReplyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessReviewsReplyResponse:
        """Publish or update the owner reply on a Google Review. Google allows one owner reply per review, so sending
        again overwrites the previous text.

        Args:
            review_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviewsReply400Error1 |
                ApiV1MiscGoogleBusinessReviewsReply401Error1 | ApiV1MiscGoogleBusinessReviewsReply403Error1 |
                ApiV1MiscGoogleBusinessReviewsReply404Error1 | ApiV1MiscGoogleBusinessReviewsReply429Error1 |
                ApiV1MiscGoogleBusinessReviewsReply500Error1 | ApiV1MiscGoogleBusinessReviewsReply502Error1 |
                ApiV1MiscGoogleBusinessReviewsReply503Error1 | ApiV1MiscGoogleBusinessReviewsReply504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_reply_to_review(
                review_id, body=body, request_options=request_options
            ),
        )

    def misc_google_business_update_attributes(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationAttributesRequest
            | ApiV1MiscGoogleBusinessLocationAttributesRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationAttributesResponse:
        """Set or change attributes on your Google Business Profile location. Complete attributes help your listing
        surface for more specific local searches.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationAttributes400Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes401Error1 | ApiV1MiscGoogleBusinessLocationAttributes403Error1
                | ApiV1MiscGoogleBusinessLocationAttributes404Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes429Error1 | ApiV1MiscGoogleBusinessLocationAttributes500Error1
                | ApiV1MiscGoogleBusinessLocationAttributes502Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes503Error1 | ApiV1MiscGoogleBusinessLocationAttributes504Error1
                | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_update_attributes(body=body, request_options=request_options)
        )

    def misc_google_business_update_food_menus(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationFoodMenusRequest | ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationFoodMenusResponse:
        """Body requires ``fields`` (``menus``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationFoodMenus400Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus401Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus403Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus404Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus429Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus500Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus502Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus503Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_update_food_menus(body=body, request_options=request_options)
        )

    def misc_google_business_update_hours(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationHoursRequest | ApiV1MiscGoogleBusinessLocationHoursRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationHoursResponse:
        """Body requires ``fields`` (``regularHours``, ``specialHours``, ``moreHours``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessLocationHours400Error1 |
                ApiV1MiscGoogleBusinessLocationHours401Error1 | ApiV1MiscGoogleBusinessLocationHours403Error1 |
                ApiV1MiscGoogleBusinessLocationHours404Error1 | ApiV1MiscGoogleBusinessLocationHours429Error1 |
                ApiV1MiscGoogleBusinessLocationHours500Error1 | ApiV1MiscGoogleBusinessLocationHours502Error1 |
                ApiV1MiscGoogleBusinessLocationHours503Error1 | ApiV1MiscGoogleBusinessLocationHours504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_update_hours(body=body, request_options=request_options)
        )

    def misc_google_business_update_location(
        self,
        *,
        body: ApiV1MiscGoogleBusinessLocationRequest | ApiV1MiscGoogleBusinessLocationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationResponse:
        """Field mask is derived automatically from provided fields.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessLocation400Error1 |
                ApiV1MiscGoogleBusinessLocation401Error1 | ApiV1MiscGoogleBusinessLocation403Error1 |
                ApiV1MiscGoogleBusinessLocation404Error1 | ApiV1MiscGoogleBusinessLocation429Error1 |
                ApiV1MiscGoogleBusinessLocation500Error1 | ApiV1MiscGoogleBusinessLocation502Error1 |
                ApiV1MiscGoogleBusinessLocation503Error1 | ApiV1MiscGoogleBusinessLocation504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_update_location(body=body, request_options=request_options)
        )

    def misc_google_business_update_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1:
        """Body requires ``fields`` (``uri``, ``placeActionType``, ``isPreferred``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_update_place_action_link(
                body=body, request_options=request_options
            ),
        )

    def misc_google_business_update_service_list(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationServiceListRequest
            | ApiV1MiscGoogleBusinessLocationServiceListRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationServiceListResponse:
        """Body requires ``fields`` (``serviceItems``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationServiceList400Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList401Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList403Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList404Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList429Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList500Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList502Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList503Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_google_business_update_service_list(body=body, request_options=request_options)
        )

    def misc_instagram_business_discovery(
        self, team_id: str, username: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscInstagramTagsResponse:
        """Checks if an Instagram user exists and returns their public profile data. Only works for Business and Creator
        accounts and only when Instagram is connected via Facebook Login. Returns followers_count, media_count, and
        profile picture if available.

        Args:
            team_id: Value sent with the request.
            username: Instagram username to search for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscInstagramTags400Error1 |
                ApiV1MiscInstagramTags401Error1 | ApiV1MiscInstagramTags403Error1 | ApiV1MiscInstagramTags404Error1 |
                ApiV1MiscInstagramTags429Error1 | ApiV1MiscInstagramTags500Error1 | ApiV1MiscInstagramTags502Error1 |
                ApiV1MiscInstagramTags503Error1 | ApiV1MiscInstagramTags504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_instagram_business_discovery(
                team_id, username, request_options=request_options
            ),
        )

    def misc_instagram_delete_comment(
        self,
        *,
        body: ApiV1MiscInstagramCommentRequest | ApiV1MiscInstagramCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscInstagramCommentResponse:
        """Permanently delete a published Instagram comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscInstagramComment400Error1 |
                ApiV1MiscInstagramComment401Error1 | ApiV1MiscInstagramComment403Error1 |
                ApiV1MiscInstagramComment404Error1 | ApiV1MiscInstagramComment429Error1 |
                ApiV1MiscInstagramComment500Error1 | ApiV1MiscInstagramComment502Error1 |
                ApiV1MiscInstagramComment503Error1 | ApiV1MiscInstagramComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_instagram_delete_comment(body=body, request_options=request_options))

    def misc_instagram_search_audio(
        self,
        team_id: str,
        audio_type: AudioTypeOrStr,
        *,
        search_query: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscInstagramAudioResponse:
        """Searches Instagram music or original sounds that can be attached to Reels. Only works for Instagram accounts
        connected via Facebook Login.

        Args:
            team_id: Value sent with the request.
            audio_type: The type of Instagram audio to search for.
            search_query: Optional keyword search query.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscInstagramAudio400Error1 |
                ApiV1MiscInstagramAudio401Error1 | ApiV1MiscInstagramAudio403Error1 | ApiV1MiscInstagramAudio404Error1 |
                ApiV1MiscInstagramAudio429Error1 | ApiV1MiscInstagramAudio500Error1 | ApiV1MiscInstagramAudio502Error1 |
                ApiV1MiscInstagramAudio503Error1 | ApiV1MiscInstagramAudio504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_instagram_search_audio(
                team_id, audio_type, search_query=search_query, request_options=request_options
            ),
        )

    def misc_instagram_search_locations(
        self, team_id: str, q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscInstagramLocationsResponse:
        """Searches Facebook Pages with physical location data and returns IDs that can be used as
        data.INSTAGRAM.locationId.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search location pages
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscInstagramLocations400Error1 |
                ApiV1MiscInstagramLocations401Error1 | ApiV1MiscInstagramLocations403Error1 |
                ApiV1MiscInstagramLocations404Error1 | ApiV1MiscInstagramLocations429Error1 |
                ApiV1MiscInstagramLocations500Error1 | ApiV1MiscInstagramLocations502Error1 |
                ApiV1MiscInstagramLocations503Error1 | ApiV1MiscInstagramLocations504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_instagram_search_locations(
                team_id, q, limit=limit, request_options=request_options
            ),
        )

    def misc_linkedin_build_commentary(
        self,
        *,
        body: ApiV1MiscLinkedinMentionsBuilderRequest | ApiV1MiscLinkedinMentionsBuilderRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinMentionsBuilderResponse:
        """If tag already exists (case insensitive), mentions replace it; otherwise they're appended to the end.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinMentionsBuilder400Error1 |
                ApiV1MiscLinkedinMentionsBuilder401Error1 | ApiV1MiscLinkedinMentionsBuilder403Error1 |
                ApiV1MiscLinkedinMentionsBuilder404Error1 | ApiV1MiscLinkedinMentionsBuilder429Error1 |
                ApiV1MiscLinkedinMentionsBuilder500Error1 | ApiV1MiscLinkedinMentionsBuilder502Error1 |
                ApiV1MiscLinkedinMentionsBuilder503Error1 | ApiV1MiscLinkedinMentionsBuilder504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_linkedin_build_commentary(body=body, request_options=request_options)
        )

    def misc_linkedin_delete_comment(
        self,
        *,
        body: ApiV1MiscLinkedinCommentRequest1 | ApiV1MiscLinkedinCommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinCommentResponse1:
        """Permanently delete a published LinkedIn comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinComment400Error1 |
                ApiV1MiscLinkedinComment401Error1 | ApiV1MiscLinkedinComment403Error1 |
                ApiV1MiscLinkedinComment404Error1 | ApiV1MiscLinkedinComment429Error1 |
                ApiV1MiscLinkedinComment500Error1 | ApiV1MiscLinkedinComment502Error1 |
                ApiV1MiscLinkedinComment503Error1 | ApiV1MiscLinkedinComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_linkedin_delete_comment(body=body, request_options=request_options))

    def misc_linkedin_delete_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostRequest1 | ApiV1MiscLinkedinPostRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinPostResponse1:
        """Permanently delete a published LinkedIn post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinPost400Error1 |
                ApiV1MiscLinkedinPost401Error1 | ApiV1MiscLinkedinPost403Error1 | ApiV1MiscLinkedinPost404Error1 |
                ApiV1MiscLinkedinPost429Error1 | ApiV1MiscLinkedinPost500Error1 | ApiV1MiscLinkedinPost502Error1 |
                ApiV1MiscLinkedinPost503Error1 | ApiV1MiscLinkedinPost504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_linkedin_delete_post(body=body, request_options=request_options))

    def misc_linkedin_edit_comment(
        self,
        *,
        body: ApiV1MiscLinkedinCommentRequest | ApiV1MiscLinkedinCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinCommentResponse:
        """Update the text content of a published LinkedIn comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinComment400Error1 |
                ApiV1MiscLinkedinComment401Error1 | ApiV1MiscLinkedinComment403Error1 |
                ApiV1MiscLinkedinComment404Error1 | ApiV1MiscLinkedinComment429Error1 |
                ApiV1MiscLinkedinComment500Error1 | ApiV1MiscLinkedinComment502Error1 |
                ApiV1MiscLinkedinComment503Error1 | ApiV1MiscLinkedinComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_linkedin_edit_comment(body=body, request_options=request_options))

    def misc_linkedin_edit_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostRequest | ApiV1MiscLinkedinPostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinPostResponse:
        """Update the text content of a published LinkedIn post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinPost400Error1 |
                ApiV1MiscLinkedinPost401Error1 | ApiV1MiscLinkedinPost403Error1 | ApiV1MiscLinkedinPost404Error1 |
                ApiV1MiscLinkedinPost429Error1 | ApiV1MiscLinkedinPost500Error1 | ApiV1MiscLinkedinPost502Error1 |
                ApiV1MiscLinkedinPost503Error1 | ApiV1MiscLinkedinPost504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_linkedin_edit_post(body=body, request_options=request_options))

    def misc_linkedin_get_tags(
        self,
        team_id: str,
        *,
        q: str | None = None,
        url: str | None = None,
        display_name: str | None = None,
        scope: ScopeOrStr | None = Scope.ALL,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinMentionsTagsResponse:
        """Search for LinkedIn people and organizations that can be @-mentioned, and get the tag IDs needed to insert
        them into post text. LinkedIn only renders a mention when the display text matches the entity's name exactly
        (case sensitive), so a vanity slug never works. When a person is resolved from ``url`` but LinkedIn does not
        expose their name, the tag comes back with an empty ``display`` and ``needsDisplayName: true`` — pass
        ``displayName`` to set it. Note that a page can only mention its own followers.

        Args:
            team_id: Value sent with the request.
            q: Value sent with the request.
            url: Value sent with the request.
            display_name: Value sent with the request.
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinMentionsTags400Error1 |
                ApiV1MiscLinkedinMentionsTags401Error1 | ApiV1MiscLinkedinMentionsTags403Error1 |
                ApiV1MiscLinkedinMentionsTags404Error1 | ApiV1MiscLinkedinMentionsTags429Error1 |
                ApiV1MiscLinkedinMentionsTags500Error1 | ApiV1MiscLinkedinMentionsTags502Error1 |
                ApiV1MiscLinkedinMentionsTags503Error1 | ApiV1MiscLinkedinMentionsTags504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_linkedin_get_tags(
                team_id, q=q, url=url, display_name=display_name, scope=scope, request_options=request_options
            ),
        )

    def misc_linkedin_reshare_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostReshareRequest | ApiV1MiscLinkedinPostReshareRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinPostReshareResponse:
        """Create a LinkedIn reshare as the currently selected LinkedIn channel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 422 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinPostReshare400Error1 |
                ApiV1MiscLinkedinPostReshare401Error1 | ApiV1MiscLinkedinPostReshare403Error1 |
                ApiV1MiscLinkedinPostReshare404Error1 | ApiV1MiscLinkedinPostReshare422Error1 |
                ApiV1MiscLinkedinPostReshare429Error1 | ApiV1MiscLinkedinPostReshare500Error1 |
                ApiV1MiscLinkedinPostReshare502Error1 | ApiV1MiscLinkedinPostReshare503Error1 |
                ApiV1MiscLinkedinPostReshare504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_linkedin_reshare_post(body=body, request_options=request_options))

    def misc_mastodon_delete_comment(
        self,
        *,
        body: ApiV1MiscMastodonCommentRequest1 | ApiV1MiscMastodonCommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscMastodonCommentResponse1:
        """Permanently delete a published Mastodon reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscMastodonComment400Error1 |
                ApiV1MiscMastodonComment401Error1 | ApiV1MiscMastodonComment403Error1 |
                ApiV1MiscMastodonComment404Error1 | ApiV1MiscMastodonComment429Error1 |
                ApiV1MiscMastodonComment500Error1 | ApiV1MiscMastodonComment502Error1 |
                ApiV1MiscMastodonComment503Error1 | ApiV1MiscMastodonComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_mastodon_delete_comment(body=body, request_options=request_options))

    def misc_mastodon_delete_status(
        self,
        *,
        body: ApiV1MiscMastodonStatusRequest1 | ApiV1MiscMastodonStatusRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscMastodonStatusResponse1:
        """Permanently delete a published Mastodon status.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscMastodonStatus400Error1 |
                ApiV1MiscMastodonStatus401Error1 | ApiV1MiscMastodonStatus403Error1 | ApiV1MiscMastodonStatus404Error1 |
                ApiV1MiscMastodonStatus429Error1 | ApiV1MiscMastodonStatus500Error1 | ApiV1MiscMastodonStatus502Error1 |
                ApiV1MiscMastodonStatus503Error1 | ApiV1MiscMastodonStatus504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_mastodon_delete_status(body=body, request_options=request_options))

    def misc_mastodon_edit_comment(
        self,
        *,
        body: ApiV1MiscMastodonCommentRequest | ApiV1MiscMastodonCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscMastodonCommentResponse:
        """Update the text content of a published Mastodon reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscMastodonComment400Error1 |
                ApiV1MiscMastodonComment401Error1 | ApiV1MiscMastodonComment403Error1 |
                ApiV1MiscMastodonComment404Error1 | ApiV1MiscMastodonComment429Error1 |
                ApiV1MiscMastodonComment500Error1 | ApiV1MiscMastodonComment502Error1 |
                ApiV1MiscMastodonComment503Error1 | ApiV1MiscMastodonComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_mastodon_edit_comment(body=body, request_options=request_options))

    def misc_mastodon_edit_status(
        self,
        *,
        body: ApiV1MiscMastodonStatusRequest | ApiV1MiscMastodonStatusRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscMastodonStatusResponse:
        """Update the text content and spoiler text of a published Mastodon status.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscMastodonStatus400Error1 |
                ApiV1MiscMastodonStatus401Error1 | ApiV1MiscMastodonStatus403Error1 | ApiV1MiscMastodonStatus404Error1 |
                ApiV1MiscMastodonStatus429Error1 | ApiV1MiscMastodonStatus500Error1 | ApiV1MiscMastodonStatus502Error1 |
                ApiV1MiscMastodonStatus503Error1 | ApiV1MiscMastodonStatus504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_mastodon_edit_status(body=body, request_options=request_options))

    def misc_pinterest_delete_pin(
        self,
        *,
        body: ApiV1MiscPinterestPinRequest1 | ApiV1MiscPinterestPinRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscPinterestPinResponse1:
        """Permanently delete a published Pinterest pin.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscPinterestPin400Error1 |
                ApiV1MiscPinterestPin401Error1 | ApiV1MiscPinterestPin403Error1 | ApiV1MiscPinterestPin404Error1 |
                ApiV1MiscPinterestPin429Error1 | ApiV1MiscPinterestPin500Error1 | ApiV1MiscPinterestPin502Error1 |
                ApiV1MiscPinterestPin503Error1 | ApiV1MiscPinterestPin504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_pinterest_delete_pin(body=body, request_options=request_options))

    def misc_pinterest_edit_pin(
        self,
        *,
        body: ApiV1MiscPinterestPinRequest | ApiV1MiscPinterestPinRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscPinterestPinResponse:
        """Temporarily disabled

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscPinterestPin400Error1 |
                ApiV1MiscPinterestPin401Error1 | ApiV1MiscPinterestPin403Error1 | ApiV1MiscPinterestPin404Error1 |
                ApiV1MiscPinterestPin429Error1 | ApiV1MiscPinterestPin500Error1 | ApiV1MiscPinterestPin502Error1 |
                ApiV1MiscPinterestPin503Error1 | ApiV1MiscPinterestPin504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_pinterest_edit_pin(body=body, request_options=request_options))

    def misc_reddit_delete_comment(
        self,
        *,
        body: ApiV1MiscRedditCommentRequest1 | ApiV1MiscRedditCommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscRedditCommentResponse1:
        """Permanently delete a published Reddit comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditComment400Error1 |
                ApiV1MiscRedditComment401Error1 | ApiV1MiscRedditComment403Error1 | ApiV1MiscRedditComment404Error1 |
                ApiV1MiscRedditComment429Error1 | ApiV1MiscRedditComment500Error1 | ApiV1MiscRedditComment502Error1 |
                ApiV1MiscRedditComment503Error1 | ApiV1MiscRedditComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_reddit_delete_comment(body=body, request_options=request_options))

    def misc_reddit_delete_post(
        self,
        *,
        body: ApiV1MiscRedditPostRequest1 | ApiV1MiscRedditPostRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscRedditPostResponse1:
        """Permanently delete a published Reddit post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditPost400Error1 |
                ApiV1MiscRedditPost401Error1 | ApiV1MiscRedditPost403Error1 | ApiV1MiscRedditPost404Error1 |
                ApiV1MiscRedditPost429Error1 | ApiV1MiscRedditPost500Error1 | ApiV1MiscRedditPost502Error1 |
                ApiV1MiscRedditPost503Error1 | ApiV1MiscRedditPost504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_reddit_delete_post(body=body, request_options=request_options))

    def misc_reddit_edit_comment(
        self,
        *,
        body: ApiV1MiscRedditCommentRequest | ApiV1MiscRedditCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscRedditCommentResponse:
        """Update the text content of a published Reddit comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditComment400Error1 |
                ApiV1MiscRedditComment401Error1 | ApiV1MiscRedditComment403Error1 | ApiV1MiscRedditComment404Error1 |
                ApiV1MiscRedditComment429Error1 | ApiV1MiscRedditComment500Error1 | ApiV1MiscRedditComment502Error1 |
                ApiV1MiscRedditComment503Error1 | ApiV1MiscRedditComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_reddit_edit_comment(body=body, request_options=request_options))

    def misc_reddit_edit_post(
        self,
        *,
        body: ApiV1MiscRedditPostRequest | ApiV1MiscRedditPostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscRedditPostResponse:
        """Update the selftext content of a published Reddit text post. Link and media posts cannot be edited.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditPost400Error1 |
                ApiV1MiscRedditPost401Error1 | ApiV1MiscRedditPost403Error1 | ApiV1MiscRedditPost404Error1 |
                ApiV1MiscRedditPost429Error1 | ApiV1MiscRedditPost500Error1 | ApiV1MiscRedditPost502Error1 |
                ApiV1MiscRedditPost503Error1 | ApiV1MiscRedditPost504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_reddit_edit_post(body=body, request_options=request_options))

    def misc_reddit_get_post_requirements(
        self, team_id: str, subreddit: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscRedditPostRequirementsResponse:
        """Check a subreddit's posting rules before publishing, including whether flair is enabled or mandatory. Call
        this first to avoid rejected submissions.

        Args:
            team_id: Value sent with the request.
            subreddit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditPostRequirements400Error1 |
                ApiV1MiscRedditPostRequirements401Error1 | ApiV1MiscRedditPostRequirements403Error1 |
                ApiV1MiscRedditPostRequirements404Error1 | ApiV1MiscRedditPostRequirements429Error1 |
                ApiV1MiscRedditPostRequirements500Error1 | ApiV1MiscRedditPostRequirements502Error1 |
                ApiV1MiscRedditPostRequirements503Error1 | ApiV1MiscRedditPostRequirements504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_reddit_get_post_requirements(
                team_id, subreddit, request_options=request_options
            ),
        )

    def misc_reddit_get_subreddit_flairs(
        self, team_id: str, subreddit: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[ApiV1MiscRedditSubredditFlairsResponse]:
        """List the flairs available in a subreddit so you can attach a valid flair ID when creating a Reddit post.

        Args:
            team_id: Value sent with the request.
            subreddit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditSubredditFlairs400Error1 |
                ApiV1MiscRedditSubredditFlairs401Error1 | ApiV1MiscRedditSubredditFlairs403Error1 |
                ApiV1MiscRedditSubredditFlairs404Error1 | ApiV1MiscRedditSubredditFlairs429Error1 |
                ApiV1MiscRedditSubredditFlairs500Error1 | ApiV1MiscRedditSubredditFlairs502Error1 |
                ApiV1MiscRedditSubredditFlairs503Error1 | ApiV1MiscRedditSubredditFlairs504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_reddit_get_subreddit_flairs(
                team_id, subreddit, request_options=request_options
            ),
        )

    def misc_slack_delete_message(
        self,
        *,
        body: ApiV1MiscSlackMessageRequest1 | ApiV1MiscSlackMessageRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscSlackMessageResponse1:
        """Permanently delete a published Slack message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscSlackMessage400Error1 |
                ApiV1MiscSlackMessage401Error1 | ApiV1MiscSlackMessage403Error1 | ApiV1MiscSlackMessage404Error1 |
                ApiV1MiscSlackMessage429Error1 | ApiV1MiscSlackMessage500Error1 | ApiV1MiscSlackMessage502Error1 |
                ApiV1MiscSlackMessage503Error1 | ApiV1MiscSlackMessage504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_slack_delete_message(body=body, request_options=request_options))

    def misc_slack_edit_message(
        self,
        *,
        body: ApiV1MiscSlackMessageRequest | ApiV1MiscSlackMessageRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscSlackMessageResponse:
        """Update the text content of a published Slack message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscSlackMessage400Error1 |
                ApiV1MiscSlackMessage401Error1 | ApiV1MiscSlackMessage403Error1 | ApiV1MiscSlackMessage404Error1 |
                ApiV1MiscSlackMessage429Error1 | ApiV1MiscSlackMessage500Error1 | ApiV1MiscSlackMessage502Error1 |
                ApiV1MiscSlackMessage503Error1 | ApiV1MiscSlackMessage504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_slack_edit_message(body=body, request_options=request_options))

    def misc_tiktok_delete_comment(
        self,
        *,
        body: ApiV1MiscTiktokCommentRequest | ApiV1MiscTiktokCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscTiktokCommentResponse:
        """Delete a published TikTok comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTiktokComment400Error1 |
                ApiV1MiscTiktokComment401Error1 | ApiV1MiscTiktokComment403Error1 | ApiV1MiscTiktokComment404Error1 |
                ApiV1MiscTiktokComment429Error1 | ApiV1MiscTiktokComment500Error1 | ApiV1MiscTiktokComment502Error1 |
                ApiV1MiscTiktokComment503Error1 | ApiV1MiscTiktokComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_tiktok_delete_comment(body=body, request_options=request_options))

    def misc_tiktok_get_commercial_music_trending_list(
        self,
        team_id: str,
        *,
        genre: GenreOrStr | None = Genre.POP,
        date_range: DateRangeOrStr | None = DateRange._7_DAY,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ApiV1MiscTiktokCmlTrendingListResponse]:
        """Retrieve up to 100 popular tracks pre-cleared for organic content and ad creation from TikTok CML.

        Args:
            team_id: Value sent with the request.
            genre: Genre filter for commercial music results.
            date_range: Timeframe for popular tracks ranking.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of trending tracks.

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTiktokCmlTrendingList400Error1 |
                ApiV1MiscTiktokCmlTrendingList401Error1 | ApiV1MiscTiktokCmlTrendingList403Error1 |
                ApiV1MiscTiktokCmlTrendingList404Error1 | ApiV1MiscTiktokCmlTrendingList429Error1 |
                ApiV1MiscTiktokCmlTrendingList500Error1 | ApiV1MiscTiktokCmlTrendingList502Error1 |
                ApiV1MiscTiktokCmlTrendingList503Error1 | ApiV1MiscTiktokCmlTrendingList504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_tiktok_get_commercial_music_trending_list(
                team_id, genre=genre, date_range=date_range, request_options=request_options
            ),
        )

    def misc_tiktok_get_post_settings(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscTiktokPostSettingsResponse:
        """Returns the privacy levels, interaction settings (comments, duet, stitch) and maximum video duration the
        connected TikTok account allows, read live from TikTok. A value the account does not allow is not rejected when
        you create the post, it fails at publish time with TT:40002. Use it to build the options of your own composer,
        not as a check before every publish: each call counts against the account's TikTok rate limit.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTiktokPostSettings400Error1 |
                ApiV1MiscTiktokPostSettings401Error1 | ApiV1MiscTiktokPostSettings403Error1 |
                ApiV1MiscTiktokPostSettings404Error1 | ApiV1MiscTiktokPostSettings429Error1 |
                ApiV1MiscTiktokPostSettings500Error1 | ApiV1MiscTiktokPostSettings502Error1 |
                ApiV1MiscTiktokPostSettings503Error1 | ApiV1MiscTiktokPostSettings504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_tiktok_get_post_settings(team_id, request_options=request_options))

    def misc_tiktok_search_locations(
        self, team_id: str, q: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscTiktokLocationsResponse:
        """Searches location tags available to the connected TikTok account (up to 20 results). Pass ``locationId`` and
        ``name`` as data.TIKTOK.locationId and data.TIKTOK.locationName to show the location on a video or photo post.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search TikTok location tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTiktokLocations400Error1 |
                ApiV1MiscTiktokLocations401Error1 | ApiV1MiscTiktokLocations403Error1 |
                ApiV1MiscTiktokLocations404Error1 | ApiV1MiscTiktokLocations429Error1 |
                ApiV1MiscTiktokLocations500Error1 | ApiV1MiscTiktokLocations502Error1 |
                ApiV1MiscTiktokLocations503Error1 | ApiV1MiscTiktokLocations504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_tiktok_search_locations(team_id, q, request_options=request_options))

    def misc_twitter_delete_comment(
        self,
        *,
        body: ApiV1MiscTwitterCommentRequest | ApiV1MiscTwitterCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscTwitterCommentResponse:
        """Permanently delete a published Twitter/X reply/comment. X charges for deletes ($0.01 per request).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTwitterComment400Error1 |
                ApiV1MiscTwitterComment401Error1 | ApiV1MiscTwitterComment403Error1 | ApiV1MiscTwitterComment404Error1 |
                ApiV1MiscTwitterComment429Error1 | ApiV1MiscTwitterComment500Error1 | ApiV1MiscTwitterComment502Error1 |
                ApiV1MiscTwitterComment503Error1 | ApiV1MiscTwitterComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_twitter_delete_comment(body=body, request_options=request_options))

    def misc_twitter_delete_tweet(
        self,
        *,
        body: ApiV1MiscTwitterTweetRequest | ApiV1MiscTwitterTweetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscTwitterTweetResponse:
        """Permanently delete a published Twitter/X tweet. X charges for deletes ($0.01 per request).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTwitterTweet400Error1 |
                ApiV1MiscTwitterTweet401Error1 | ApiV1MiscTwitterTweet403Error1 | ApiV1MiscTwitterTweet404Error1 |
                ApiV1MiscTwitterTweet429Error1 | ApiV1MiscTwitterTweet500Error1 | ApiV1MiscTwitterTweet502Error1 |
                ApiV1MiscTwitterTweet503Error1 | ApiV1MiscTwitterTweet504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_twitter_delete_tweet(body=body, request_options=request_options))

    def misc_twitter_retweet(
        self,
        *,
        body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscTwitterRetweetResponse:
        """Repost (retweet) any X post from the connected account. X charges for reposts ($0.015 per request); your
        credits are charged once per post, per connected account, per UTC day, so reposting the same post again on the
        same day costs no extra credit. Reposting a post that is already reposted is a no-op on X's side.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTwitterRetweet400Error1 |
                ApiV1MiscTwitterRetweet401Error1 | ApiV1MiscTwitterRetweet403Error1 | ApiV1MiscTwitterRetweet404Error1 |
                ApiV1MiscTwitterRetweet429Error1 | ApiV1MiscTwitterRetweet500Error1 | ApiV1MiscTwitterRetweet502Error1 |
                ApiV1MiscTwitterRetweet503Error1 | ApiV1MiscTwitterRetweet504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_twitter_retweet(body=body, request_options=request_options))

    def misc_twitter_unretweet(
        self,
        *,
        body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscTwitterRetweetResponse:
        """Remove a repost (retweet) made by the connected account. X charges for this too ($0.01 per request); your
        credits are charged once per post, per connected account, per UTC day, the same way reposting is.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTwitterRetweet400Error1 |
                ApiV1MiscTwitterRetweet401Error1 | ApiV1MiscTwitterRetweet403Error1 | ApiV1MiscTwitterRetweet404Error1 |
                ApiV1MiscTwitterRetweet429Error1 | ApiV1MiscTwitterRetweet500Error1 | ApiV1MiscTwitterRetweet502Error1 |
                ApiV1MiscTwitterRetweet503Error1 | ApiV1MiscTwitterRetweet504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_twitter_unretweet(body=body, request_options=request_options))

    def misc_youtube_add_video_to_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistItemsRequest | ApiV1MiscYoutubePlaylistItemsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubePlaylistItemsResponse:
        """Append a video to a YouTube playlist on a connected channel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylistItems400Error1 |
                ApiV1MiscYoutubePlaylistItems401Error1 | ApiV1MiscYoutubePlaylistItems403Error1 |
                ApiV1MiscYoutubePlaylistItems404Error1 | ApiV1MiscYoutubePlaylistItems429Error1 |
                ApiV1MiscYoutubePlaylistItems500Error1 | ApiV1MiscYoutubePlaylistItems502Error1 |
                ApiV1MiscYoutubePlaylistItems503Error1 | ApiV1MiscYoutubePlaylistItems504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_youtube_add_video_to_playlist(body=body, request_options=request_options)
        )

    def misc_youtube_create_new_channel_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistRequest | ApiV1MiscYoutubePlaylistRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubePlaylistResponse1:
        """Create a playlist on a connected YouTube channel with a title, description, and privacy status. Playlists
        group related videos and increase session watch time.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylist400Error1 |
                ApiV1MiscYoutubePlaylist401Error1 | ApiV1MiscYoutubePlaylist403Error1 |
                ApiV1MiscYoutubePlaylist404Error1 | ApiV1MiscYoutubePlaylist429Error1 |
                ApiV1MiscYoutubePlaylist500Error1 | ApiV1MiscYoutubePlaylist502Error1 |
                ApiV1MiscYoutubePlaylist503Error1 | ApiV1MiscYoutubePlaylist504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_youtube_create_new_channel_playlist(body=body, request_options=request_options)
        )

    def misc_youtube_delete_channel_playlist(
        self, playlist_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> bool:
        """Permanently delete a playlist from a connected YouTube channel. The videos themselves are not deleted.

        Args:
            playlist_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylist400Error1 |
                ApiV1MiscYoutubePlaylist401Error1 | ApiV1MiscYoutubePlaylist403Error1 |
                ApiV1MiscYoutubePlaylist404Error1 | ApiV1MiscYoutubePlaylist429Error1 |
                ApiV1MiscYoutubePlaylist500Error1 | ApiV1MiscYoutubePlaylist502Error1 |
                ApiV1MiscYoutubePlaylist503Error1 | ApiV1MiscYoutubePlaylist504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_youtube_delete_channel_playlist(
                playlist_id, team_id, request_options=request_options
            ),
        )

    def misc_youtube_delete_comment(
        self,
        *,
        body: ApiV1MiscYoutubeCommentRequest1 | ApiV1MiscYoutubeCommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubeCommentResponse1:
        """Permanently delete a published YouTube comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeComment400Error1 |
                ApiV1MiscYoutubeComment401Error1 | ApiV1MiscYoutubeComment403Error1 | ApiV1MiscYoutubeComment404Error1 |
                ApiV1MiscYoutubeComment429Error1 | ApiV1MiscYoutubeComment500Error1 | ApiV1MiscYoutubeComment502Error1 |
                ApiV1MiscYoutubeComment503Error1 | ApiV1MiscYoutubeComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_youtube_delete_comment(body=body, request_options=request_options))

    def misc_youtube_delete_video(
        self,
        *,
        body: ApiV1MiscYoutubeVideoRequest1 | ApiV1MiscYoutubeVideoRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubeVideoResponse1:
        """Permanently delete a published YouTube video.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeVideo400Error1 |
                ApiV1MiscYoutubeVideo401Error1 | ApiV1MiscYoutubeVideo403Error1 | ApiV1MiscYoutubeVideo404Error1 |
                ApiV1MiscYoutubeVideo429Error1 | ApiV1MiscYoutubeVideo500Error1 | ApiV1MiscYoutubeVideo502Error1 |
                ApiV1MiscYoutubeVideo503Error1 | ApiV1MiscYoutubeVideo504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_youtube_delete_video(body=body, request_options=request_options))

    def misc_youtube_delete_video_from_playlist(
        self, playlist_item_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> bool:
        """Remove a single video from a YouTube playlist. Pass the playlist item ID, not the video ID. The video itself
        stays on the channel.

        Args:
            playlist_item_id: Playlist item ID (not video ID)
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylistItems400Error1 |
                ApiV1MiscYoutubePlaylistItems401Error1 | ApiV1MiscYoutubePlaylistItems403Error1 |
                ApiV1MiscYoutubePlaylistItems404Error1 | ApiV1MiscYoutubePlaylistItems429Error1 |
                ApiV1MiscYoutubePlaylistItems500Error1 | ApiV1MiscYoutubePlaylistItems502Error1 |
                ApiV1MiscYoutubePlaylistItems503Error1 | ApiV1MiscYoutubePlaylistItems504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_youtube_delete_video_from_playlist(
                playlist_item_id, team_id, request_options=request_options
            ),
        )

    def misc_youtube_edit_comment(
        self,
        *,
        body: ApiV1MiscYoutubeCommentRequest | ApiV1MiscYoutubeCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubeCommentResponse:
        """Update the text content of a published YouTube comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeComment400Error1 |
                ApiV1MiscYoutubeComment401Error1 | ApiV1MiscYoutubeComment403Error1 | ApiV1MiscYoutubeComment404Error1 |
                ApiV1MiscYoutubeComment429Error1 | ApiV1MiscYoutubeComment500Error1 | ApiV1MiscYoutubeComment502Error1 |
                ApiV1MiscYoutubeComment503Error1 | ApiV1MiscYoutubeComment504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_youtube_edit_comment(body=body, request_options=request_options))

    def misc_youtube_edit_video(
        self,
        *,
        body: ApiV1MiscYoutubeVideoRequest | ApiV1MiscYoutubeVideoRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubeVideoResponse:
        """Update the title, description, tags, category, or privacy status of a published YouTube video.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeVideo400Error1 |
                ApiV1MiscYoutubeVideo401Error1 | ApiV1MiscYoutubeVideo403Error1 | ApiV1MiscYoutubeVideo404Error1 |
                ApiV1MiscYoutubeVideo429Error1 | ApiV1MiscYoutubeVideo500Error1 | ApiV1MiscYoutubeVideo502Error1 |
                ApiV1MiscYoutubeVideo503Error1 | ApiV1MiscYoutubeVideo504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_youtube_edit_video(body=body, request_options=request_options))

    def misc_youtube_get_channel_playlist(
        self, team_id: str, *, max_results: int | None = 10, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscYoutubePlaylistResponse:
        """List the playlists on a connected YouTube channel, with their IDs, titles, and privacy status.

        Args:
            team_id: Value sent with the request.
            max_results: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylist400Error1 |
                ApiV1MiscYoutubePlaylist401Error1 | ApiV1MiscYoutubePlaylist403Error1 |
                ApiV1MiscYoutubePlaylist404Error1 | ApiV1MiscYoutubePlaylist429Error1 |
                ApiV1MiscYoutubePlaylist500Error1 | ApiV1MiscYoutubePlaylist502Error1 |
                ApiV1MiscYoutubePlaylist503Error1 | ApiV1MiscYoutubePlaylist504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_youtube_get_channel_playlist(
                team_id, max_results=max_results, request_options=request_options
            ),
        )

    def misc_youtube_get_regions(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscYoutubeRegionsResponse:
        """Retrieve the list of content regions that the YouTube website supports.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeRegions400Error1 |
                ApiV1MiscYoutubeRegions401Error1 | ApiV1MiscYoutubeRegions403Error1 | ApiV1MiscYoutubeRegions404Error1 |
                ApiV1MiscYoutubeRegions429Error1 | ApiV1MiscYoutubeRegions500Error1 | ApiV1MiscYoutubeRegions502Error1 |
                ApiV1MiscYoutubeRegions503Error1 | ApiV1MiscYoutubeRegions504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_youtube_get_regions(team_id, request_options=request_options))

    def misc_youtube_get_video_categories(
        self, team_id: str, *, region_code: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1MiscYoutubeVideoCategoriesResponse:
        """Retrieve the list of video categories that can be associated with YouTube videos for a specific region.

        Args:
            team_id: Value sent with the request.
            region_code: ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'PL'). Defaults to 'US'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeVideoCategories400Error1 |
                ApiV1MiscYoutubeVideoCategories401Error1 | ApiV1MiscYoutubeVideoCategories403Error1 |
                ApiV1MiscYoutubeVideoCategories404Error1 | ApiV1MiscYoutubeVideoCategories429Error1 |
                ApiV1MiscYoutubeVideoCategories500Error1 | ApiV1MiscYoutubeVideoCategories502Error1 |
                ApiV1MiscYoutubeVideoCategories503Error1 | ApiV1MiscYoutubeVideoCategories504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_youtube_get_video_categories(
                team_id, region_code=region_code, request_options=request_options
            ),
        )

    def misc_youtube_get_videos_from_playlist(
        self,
        team_id: str,
        playlist_id: str,
        *,
        max_results: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubePlaylistItemsResponse1:
        """List the videos in a YouTube playlist, including the playlist item IDs required to remove individual entries.

        Args:
            team_id: Value sent with the request.
            playlist_id: Value sent with the request.
            max_results: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylistItems400Error1 |
                ApiV1MiscYoutubePlaylistItems401Error1 | ApiV1MiscYoutubePlaylistItems403Error1 |
                ApiV1MiscYoutubePlaylistItems404Error1 | ApiV1MiscYoutubePlaylistItems429Error1 |
                ApiV1MiscYoutubePlaylistItems500Error1 | ApiV1MiscYoutubePlaylistItems502Error1 |
                ApiV1MiscYoutubePlaylistItems503Error1 | ApiV1MiscYoutubePlaylistItems504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_youtube_get_videos_from_playlist(
                team_id, playlist_id, max_results=max_results, request_options=request_options
            ),
        )

    def misc_youtube_set_thumbnail(
        self,
        *,
        body: ApiV1MiscYoutubeThumbnailRequest | ApiV1MiscYoutubeThumbnailRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubeThumbnailResponse:
        """Upload a custom thumbnail for a published YouTube video. Custom thumbnails require a verified channel and
        strongly influence click-through rate.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeThumbnail400Error1 |
                ApiV1MiscYoutubeThumbnail401Error1 | ApiV1MiscYoutubeThumbnail403Error1 |
                ApiV1MiscYoutubeThumbnail404Error1 | ApiV1MiscYoutubeThumbnail429Error1 |
                ApiV1MiscYoutubeThumbnail500Error1 | ApiV1MiscYoutubeThumbnail502Error1 |
                ApiV1MiscYoutubeThumbnail503Error1 | ApiV1MiscYoutubeThumbnail504Error1 | RawError``."""
        return unwrap(self._with_raw_response.misc_youtube_set_thumbnail(body=body, request_options=request_options))

    def misc_youtube_update_channel_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistRequest1 | ApiV1MiscYoutubePlaylistRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubePlaylistResponse1:
        """Change the title, description, or privacy status of a YouTube playlist on a connected channel. Send the
        playlist ID together with the fields you want to update.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylist400Error1 |
                ApiV1MiscYoutubePlaylist401Error1 | ApiV1MiscYoutubePlaylist403Error1 |
                ApiV1MiscYoutubePlaylist404Error1 | ApiV1MiscYoutubePlaylist429Error1 |
                ApiV1MiscYoutubePlaylist500Error1 | ApiV1MiscYoutubePlaylist502Error1 |
                ApiV1MiscYoutubePlaylist503Error1 | ApiV1MiscYoutubePlaylist504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.misc_youtube_update_channel_playlist(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> MiscWithRawResponse:
        return self._with_raw_response


class AsyncMisc:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMiscWithRawResponse(client, server, auth)

    async def misc_bluesky_delete_comment(
        self,
        *,
        body: ApiV1MiscBlueskyCommentRequest | ApiV1MiscBlueskyCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscBlueskyCommentResponse:
        """Permanently delete a published Bluesky reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscBlueskyComment400Error1 |
                ApiV1MiscBlueskyComment401Error1 | ApiV1MiscBlueskyComment403Error1 | ApiV1MiscBlueskyComment404Error1 |
                ApiV1MiscBlueskyComment429Error1 | ApiV1MiscBlueskyComment500Error1 | ApiV1MiscBlueskyComment502Error1 |
                ApiV1MiscBlueskyComment503Error1 | ApiV1MiscBlueskyComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_bluesky_delete_comment(body=body, request_options=request_options)
        )

    async def misc_bluesky_delete_post(
        self,
        *,
        body: ApiV1MiscBlueskyPostRequest | ApiV1MiscBlueskyPostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscBlueskyPostResponse:
        """Permanently delete a published Bluesky post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscBlueskyPost400Error1 |
                ApiV1MiscBlueskyPost401Error1 | ApiV1MiscBlueskyPost403Error1 | ApiV1MiscBlueskyPost404Error1 |
                ApiV1MiscBlueskyPost429Error1 | ApiV1MiscBlueskyPost500Error1 | ApiV1MiscBlueskyPost502Error1 |
                ApiV1MiscBlueskyPost503Error1 | ApiV1MiscBlueskyPost504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_bluesky_delete_post(body=body, request_options=request_options)
        )

    async def misc_discord_delete_message(
        self,
        *,
        body: ApiV1MiscDiscordMessageRequest | ApiV1MiscDiscordMessageRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscDiscordMessageResponse:
        """Permanently delete a published Discord message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscDiscordMessage400Error1 |
                ApiV1MiscDiscordMessage401Error1 | ApiV1MiscDiscordMessage403Error1 | ApiV1MiscDiscordMessage404Error1 |
                ApiV1MiscDiscordMessage429Error1 | ApiV1MiscDiscordMessage500Error1 | ApiV1MiscDiscordMessage502Error1 |
                ApiV1MiscDiscordMessage503Error1 | ApiV1MiscDiscordMessage504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_discord_delete_message(body=body, request_options=request_options)
        )

    async def misc_facebook_delete_comment(
        self,
        *,
        body: ApiV1MiscFacebookCommentRequest1 | ApiV1MiscFacebookCommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookCommentResponse1:
        """Permanently delete a published Facebook comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookComment400Error1 |
                ApiV1MiscFacebookComment401Error1 | ApiV1MiscFacebookComment403Error1 |
                ApiV1MiscFacebookComment404Error1 | ApiV1MiscFacebookComment429Error1 |
                ApiV1MiscFacebookComment500Error1 | ApiV1MiscFacebookComment502Error1 |
                ApiV1MiscFacebookComment503Error1 | ApiV1MiscFacebookComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_delete_comment(body=body, request_options=request_options)
        )

    async def misc_facebook_delete_post(
        self,
        *,
        body: ApiV1MiscFacebookPostRequest1 | ApiV1MiscFacebookPostRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookPostResponse1:
        """Permanently delete a published Facebook post or reel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookPost400Error1 |
                ApiV1MiscFacebookPost401Error1 | ApiV1MiscFacebookPost403Error1 | ApiV1MiscFacebookPost404Error1 |
                ApiV1MiscFacebookPost429Error1 | ApiV1MiscFacebookPost500Error1 | ApiV1MiscFacebookPost502Error1 |
                ApiV1MiscFacebookPost503Error1 | ApiV1MiscFacebookPost504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_delete_post(body=body, request_options=request_options)
        )

    async def misc_facebook_edit_comment(
        self,
        *,
        body: ApiV1MiscFacebookCommentRequest | ApiV1MiscFacebookCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookCommentResponse:
        """Update the text content of a published Facebook comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookComment400Error1 |
                ApiV1MiscFacebookComment401Error1 | ApiV1MiscFacebookComment403Error1 |
                ApiV1MiscFacebookComment404Error1 | ApiV1MiscFacebookComment429Error1 |
                ApiV1MiscFacebookComment500Error1 | ApiV1MiscFacebookComment502Error1 |
                ApiV1MiscFacebookComment503Error1 | ApiV1MiscFacebookComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_edit_comment(body=body, request_options=request_options)
        )

    async def misc_facebook_edit_post(
        self,
        *,
        body: ApiV1MiscFacebookPostRequest | ApiV1MiscFacebookPostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookPostResponse:
        """Update the message/content of a published Facebook post or reel. Note: Only text content can be edited, media
        cannot be changed.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookPost400Error1 |
                ApiV1MiscFacebookPost401Error1 | ApiV1MiscFacebookPost403Error1 | ApiV1MiscFacebookPost404Error1 |
                ApiV1MiscFacebookPost429Error1 | ApiV1MiscFacebookPost500Error1 | ApiV1MiscFacebookPost502Error1 |
                ApiV1MiscFacebookPost503Error1 | ApiV1MiscFacebookPost504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.misc_facebook_edit_post(body=body, request_options=request_options))

    async def misc_facebook_get_recommendation_by_id(
        self, recommendation_id: str, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookRecommendationsResponse1:
        """Retrieve one imported Facebook recommendation with its rating, text, author, and existing replies.

        Args:
            recommendation_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookRecommendations400Error1 |
                ApiV1MiscFacebookRecommendations401Error1 | ApiV1MiscFacebookRecommendations403Error1 |
                ApiV1MiscFacebookRecommendations404Error1 | ApiV1MiscFacebookRecommendations429Error1 |
                ApiV1MiscFacebookRecommendations500Error1 | ApiV1MiscFacebookRecommendations502Error1 |
                ApiV1MiscFacebookRecommendations503Error1 | ApiV1MiscFacebookRecommendations504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_get_recommendation_by_id(
                recommendation_id, team_id, request_options=request_options
            ),
        )

    async def misc_facebook_get_recommendation_comments(
        self, recommendation_id: str, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookRecommendationsCommentsResponse:
        """List the comments in a Facebook recommendation thread so you can see the full conversation before replying.

        Args:
            recommendation_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscFacebookRecommendationsComments400Error1 | ApiV1MiscFacebookRecommendationsComments401Error1
                | ApiV1MiscFacebookRecommendationsComments403Error1 | ApiV1MiscFacebookRecommendationsComments404Error1
                | ApiV1MiscFacebookRecommendationsComments429Error1 | ApiV1MiscFacebookRecommendationsComments500Error1
                | ApiV1MiscFacebookRecommendationsComments502Error1 | ApiV1MiscFacebookRecommendationsComments503Error1
                | ApiV1MiscFacebookRecommendationsComments504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_get_recommendation_comments(
                recommendation_id, team_id, request_options=request_options
            ),
        )

    async def misc_facebook_get_recommendation_import_by_id(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookRecommendationsImportResponse:
        """Check the status, progress, and result of a single Facebook recommendations import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookRecommendationsImport400Error1
                | ApiV1MiscFacebookRecommendationsImport401Error1 | ApiV1MiscFacebookRecommendationsImport403Error1 |
                ApiV1MiscFacebookRecommendationsImport404Error1 | ApiV1MiscFacebookRecommendationsImport429Error1 |
                ApiV1MiscFacebookRecommendationsImport500Error1 | ApiV1MiscFacebookRecommendationsImport502Error1 |
                ApiV1MiscFacebookRecommendationsImport503Error1 | ApiV1MiscFacebookRecommendationsImport504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_get_recommendation_import_by_id(
                import_id, request_options=request_options
            ),
        )

    async def misc_facebook_get_recommendation_import_status(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookRecommendationsImportResponse1:
        """List Facebook recommendation import jobs for a team so you can monitor which imports are queued, running,
        finished, or failed.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookRecommendationsImport400Error1
                | ApiV1MiscFacebookRecommendationsImport401Error1 | ApiV1MiscFacebookRecommendationsImport403Error1 |
                ApiV1MiscFacebookRecommendationsImport404Error1 | ApiV1MiscFacebookRecommendationsImport429Error1 |
                ApiV1MiscFacebookRecommendationsImport500Error1 | ApiV1MiscFacebookRecommendationsImport502Error1 |
                ApiV1MiscFacebookRecommendationsImport503Error1 | ApiV1MiscFacebookRecommendationsImport504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_get_recommendation_import_status(
                team_id, request_options=request_options
            ),
        )

    async def misc_facebook_get_recommendations(
        self,
        team_id: str,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookRecommendationsResponse:
        """List the Facebook Page recommendations pulled in by an import, with paging and your remaining import
        capacity. Use it to build a reputation-management inbox.

        Args:
            team_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookRecommendations400Error1 |
                ApiV1MiscFacebookRecommendations401Error1 | ApiV1MiscFacebookRecommendations403Error1 |
                ApiV1MiscFacebookRecommendations404Error1 | ApiV1MiscFacebookRecommendations429Error1 |
                ApiV1MiscFacebookRecommendations500Error1 | ApiV1MiscFacebookRecommendations502Error1 |
                ApiV1MiscFacebookRecommendations503Error1 | ApiV1MiscFacebookRecommendations504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_get_recommendations(
                team_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def misc_facebook_get_text_format_presets(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookTextFormatPresetsResponse:
        """Return the text background presets (colored statuses) that can be passed as data.FACEBOOK.textFormatPresetId,
        grouped by whether each one renders as a flat color, a gradient, or an illustration. Facebook exposes no
        endpoint of its own for this, so read the list from here instead of hardcoding IDs. Any other numeric ID is also
        accepted and passed straight through to Facebook.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookTextFormatPresets400Error1 |
                ApiV1MiscFacebookTextFormatPresets401Error1 | ApiV1MiscFacebookTextFormatPresets403Error1 |
                ApiV1MiscFacebookTextFormatPresets404Error1 | ApiV1MiscFacebookTextFormatPresets429Error1 |
                ApiV1MiscFacebookTextFormatPresets500Error1 | ApiV1MiscFacebookTextFormatPresets502Error1 |
                ApiV1MiscFacebookTextFormatPresets503Error1 | ApiV1MiscFacebookTextFormatPresets504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_get_text_format_presets(request_options=request_options)
        )

    async def misc_facebook_get_token_debug(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookTokenDebugResponse:
        """Inspect a connected Facebook account's access token, including its scopes and expiry. Use it to diagnose
        permission errors when publishing fails.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookTokenDebug400Error1 |
                ApiV1MiscFacebookTokenDebug401Error1 | ApiV1MiscFacebookTokenDebug403Error1 |
                ApiV1MiscFacebookTokenDebug404Error1 | ApiV1MiscFacebookTokenDebug429Error1 |
                ApiV1MiscFacebookTokenDebug500Error1 | ApiV1MiscFacebookTokenDebug502Error1 |
                ApiV1MiscFacebookTokenDebug503Error1 | ApiV1MiscFacebookTokenDebug504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_get_token_debug(team_id, request_options=request_options)
        )

    async def misc_facebook_import_recommendations(
        self,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsImportRequest | ApiV1MiscFacebookRecommendationsImportRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookRecommendationsImportResponse:
        """Kick off an asynchronous import that pulls recommendations left on your Facebook Page into bundle.social so
        you can read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is
                ``ApiV1MiscFacebookRecommendationsImport400Error1 | ApiV1MiscFacebookRecommendationsImport401Error1 |
                ApiV1MiscFacebookRecommendationsImport403Error1 | ApiV1MiscFacebookRecommendationsImport404Error1 |
                ApiV1MiscFacebookRecommendationsImport409Error1 | ApiV1MiscFacebookRecommendationsImport429Error1 |
                ApiV1MiscFacebookRecommendationsImport500Error1 | ApiV1MiscFacebookRecommendationsImport502Error1 |
                ApiV1MiscFacebookRecommendationsImport503Error1 | ApiV1MiscFacebookRecommendationsImport504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_import_recommendations(
                body=body, request_options=request_options
            ),
        )

    async def misc_facebook_reply_to_recommendation(
        self,
        recommendation_id: str,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsReplyRequest | ApiV1MiscFacebookRecommendationsReplyRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookRecommendationsReplyResponse:
        """Publish a Page reply to a Facebook recommendation. Use it to respond to reviews programmatically instead of
        through Meta Business Suite.

        Args:
            recommendation_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookRecommendationsReply400Error1
                | ApiV1MiscFacebookRecommendationsReply401Error1 | ApiV1MiscFacebookRecommendationsReply403Error1 |
                ApiV1MiscFacebookRecommendationsReply404Error1 | ApiV1MiscFacebookRecommendationsReply429Error1 |
                ApiV1MiscFacebookRecommendationsReply500Error1 | ApiV1MiscFacebookRecommendationsReply502Error1 |
                ApiV1MiscFacebookRecommendationsReply503Error1 | ApiV1MiscFacebookRecommendationsReply504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_reply_to_recommendation(
                recommendation_id, body=body, request_options=request_options
            ),
        )

    async def misc_facebook_reply_to_recommendation_comment(
        self,
        recommendation_id: str,
        comment_id: str,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsCommentsReplyRequest
            | ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscFacebookRecommendationsCommentsReplyResponse:
        """Publish a reply to a specific comment inside a Facebook recommendation thread.

        Args:
            recommendation_id: Value sent with the request.
            comment_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscFacebookRecommendationsCommentsReply400Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply401Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply403Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply404Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply429Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply500Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply502Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply503Error1 |
                ApiV1MiscFacebookRecommendationsCommentsReply504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_reply_to_recommendation_comment(
                recommendation_id, comment_id, body=body, request_options=request_options
            ),
        )

    async def misc_facebook_search_pages(
        self, team_id: str, q: str, *, limit: int | None = 10, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscFacebookPagesResponse:
        """Searches public Facebook Pages and returns IDs that can be inserted into Facebook Page mention tokens.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search Facebook Pages
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscFacebookPages400Error1 |
                ApiV1MiscFacebookPages401Error1 | ApiV1MiscFacebookPages403Error1 | ApiV1MiscFacebookPages404Error1 |
                ApiV1MiscFacebookPages429Error1 | ApiV1MiscFacebookPages500Error1 | ApiV1MiscFacebookPages502Error1 |
                ApiV1MiscFacebookPages503Error1 | ApiV1MiscFacebookPages504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_facebook_search_pages(
                team_id, q, limit=limit, request_options=request_options
            ),
        )

    async def misc_google_business_add_media(
        self,
        *,
        body: ApiV1MiscGoogleBusinessMediaRequest | ApiV1MiscGoogleBusinessMediaRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessMediaResponse:
        """Publish a photo or video to your Google Business Profile from a bundle.social upload, tagged with a category
        such as exterior, interior, or product. Fresh photos are a local ranking and conversion signal.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessMedia400Error1 |
                ApiV1MiscGoogleBusinessMedia401Error1 | ApiV1MiscGoogleBusinessMedia403Error1 |
                ApiV1MiscGoogleBusinessMedia404Error1 | ApiV1MiscGoogleBusinessMedia429Error1 |
                ApiV1MiscGoogleBusinessMedia500Error1 | ApiV1MiscGoogleBusinessMedia502Error1 |
                ApiV1MiscGoogleBusinessMedia503Error1 | ApiV1MiscGoogleBusinessMedia504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_add_media(body=body, request_options=request_options)
        )

    async def misc_google_business_create_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1:
        """Add an action link such as Book, Order online, or Reserve to your Google Business Profile so customers can
        convert straight from the listing.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_create_place_action_link(
                body=body, request_options=request_options
            ),
        )

    async def misc_google_business_delete_media(
        self,
        *,
        body: ApiV1MiscGoogleBusinessMediaRequest1 | ApiV1MiscGoogleBusinessMediaRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessMediaResponse2:
        """Remove a photo or video from your Google Business Profile.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessMedia400Error1 |
                ApiV1MiscGoogleBusinessMedia401Error1 | ApiV1MiscGoogleBusinessMedia403Error1 |
                ApiV1MiscGoogleBusinessMedia404Error1 | ApiV1MiscGoogleBusinessMedia429Error1 |
                ApiV1MiscGoogleBusinessMedia500Error1 | ApiV1MiscGoogleBusinessMedia502Error1 |
                ApiV1MiscGoogleBusinessMedia503Error1 | ApiV1MiscGoogleBusinessMedia504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_delete_media(body=body, request_options=request_options)
        )

    async def misc_google_business_delete_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3:
        """Remove an action link from your Google Business Profile, for example when a booking URL is retired.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_delete_place_action_link(
                body=body, request_options=request_options
            ),
        )

    async def misc_google_business_delete_post(
        self,
        *,
        body: ApiV1MiscGoogleBusinessPostRequest | ApiV1MiscGoogleBusinessPostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessPostResponse:
        """Permanently delete a published Google Business post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessPost400Error1 |
                ApiV1MiscGoogleBusinessPost401Error1 | ApiV1MiscGoogleBusinessPost403Error1 |
                ApiV1MiscGoogleBusinessPost404Error1 | ApiV1MiscGoogleBusinessPost429Error1 |
                ApiV1MiscGoogleBusinessPost500Error1 | ApiV1MiscGoogleBusinessPost502Error1 |
                ApiV1MiscGoogleBusinessPost503Error1 | ApiV1MiscGoogleBusinessPost504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_delete_post(body=body, request_options=request_options)
        )

    async def misc_google_business_delete_review_reply(
        self,
        review_id: str,
        *,
        body: (
            ApiV1MiscGoogleBusinessReviewsReplyRequest1 | ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessReviewsReplyResponse:
        """Remove your owner reply from a Google Review, leaving the customer's review in place.

        Args:
            review_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviewsReply400Error1 |
                ApiV1MiscGoogleBusinessReviewsReply401Error1 | ApiV1MiscGoogleBusinessReviewsReply403Error1 |
                ApiV1MiscGoogleBusinessReviewsReply404Error1 | ApiV1MiscGoogleBusinessReviewsReply429Error1 |
                ApiV1MiscGoogleBusinessReviewsReply500Error1 | ApiV1MiscGoogleBusinessReviewsReply502Error1 |
                ApiV1MiscGoogleBusinessReviewsReply503Error1 | ApiV1MiscGoogleBusinessReviewsReply504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_delete_review_reply(
                review_id, body=body, request_options=request_options
            ),
        )

    async def misc_google_business_get_attributes(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscGoogleBusinessLocationAttributesResponse:
        """Retrieve the attributes currently set on your Google Business Profile location, such as accessibility,
        payment options, or amenities.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationAttributes400Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes401Error1 | ApiV1MiscGoogleBusinessLocationAttributes403Error1
                | ApiV1MiscGoogleBusinessLocationAttributes404Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes429Error1 | ApiV1MiscGoogleBusinessLocationAttributes500Error1
                | ApiV1MiscGoogleBusinessLocationAttributes502Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes503Error1 | ApiV1MiscGoogleBusinessLocationAttributes504Error1
                | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_get_attributes(team_id, request_options=request_options)
        )

    async def misc_google_business_get_food_menus(
        self,
        team_id: str,
        *,
        fields: list[Field3OrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationFoodMenusResponse:
        """Use typed query param ``fields``. Supports both comma-separated values (``fields=name,menus``) and repeated
        params (``fields=name&fields=menus``).

        Args:
            team_id: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationFoodMenus400Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus401Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus403Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus404Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus429Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus500Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus502Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus503Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_get_food_menus(
                team_id, fields=fields, request_options=request_options
            ),
        )

    async def misc_google_business_get_location(
        self,
        team_id: str,
        *,
        fields: list[FieldBundleSocialMiscApiOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationResponse:
        """Use typed query param ``fields``. Supports both comma-separated values (``fields=name,title``) and repeated
        params (``fields=name&fields=title``).

        Args:
            team_id: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessLocation400Error1 |
                ApiV1MiscGoogleBusinessLocation401Error1 | ApiV1MiscGoogleBusinessLocation403Error1 |
                ApiV1MiscGoogleBusinessLocation404Error1 | ApiV1MiscGoogleBusinessLocation429Error1 |
                ApiV1MiscGoogleBusinessLocation500Error1 | ApiV1MiscGoogleBusinessLocation502Error1 |
                ApiV1MiscGoogleBusinessLocation503Error1 | ApiV1MiscGoogleBusinessLocation504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_get_location(
                team_id, fields=fields, request_options=request_options
            ),
        )

    async def misc_google_business_get_review_by_id(
        self, review_id: str, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscGoogleBusinessReviewsResponse1:
        """Retrieve one imported Google Review with its star rating, text, reviewer, and any existing owner reply.

        Args:
            review_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviews400Error1 |
                ApiV1MiscGoogleBusinessReviews401Error1 | ApiV1MiscGoogleBusinessReviews403Error1 |
                ApiV1MiscGoogleBusinessReviews404Error1 | ApiV1MiscGoogleBusinessReviews429Error1 |
                ApiV1MiscGoogleBusinessReviews500Error1 | ApiV1MiscGoogleBusinessReviews502Error1 |
                ApiV1MiscGoogleBusinessReviews503Error1 | ApiV1MiscGoogleBusinessReviews504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_get_review_by_id(
                review_id, team_id, request_options=request_options
            ),
        )

    async def misc_google_business_get_review_import_by_id(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscGoogleBusinessReviewsImportResponse:
        """Check the status, progress, and result of a single Google Reviews import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviewsImport400Error1 |
                ApiV1MiscGoogleBusinessReviewsImport401Error1 | ApiV1MiscGoogleBusinessReviewsImport403Error1 |
                ApiV1MiscGoogleBusinessReviewsImport404Error1 | ApiV1MiscGoogleBusinessReviewsImport429Error1 |
                ApiV1MiscGoogleBusinessReviewsImport500Error1 | ApiV1MiscGoogleBusinessReviewsImport502Error1 |
                ApiV1MiscGoogleBusinessReviewsImport503Error1 | ApiV1MiscGoogleBusinessReviewsImport504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_get_review_import_by_id(
                import_id, request_options=request_options
            ),
        )

    async def misc_google_business_get_review_import_status(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscGoogleBusinessReviewsImportResponse1:
        """List Google Review import jobs for a team so you can monitor which imports are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviewsImport400Error1 |
                ApiV1MiscGoogleBusinessReviewsImport401Error1 | ApiV1MiscGoogleBusinessReviewsImport403Error1 |
                ApiV1MiscGoogleBusinessReviewsImport404Error1 | ApiV1MiscGoogleBusinessReviewsImport429Error1 |
                ApiV1MiscGoogleBusinessReviewsImport500Error1 | ApiV1MiscGoogleBusinessReviewsImport502Error1 |
                ApiV1MiscGoogleBusinessReviewsImport503Error1 | ApiV1MiscGoogleBusinessReviewsImport504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_get_review_import_status(
                team_id, request_options=request_options
            ),
        )

    async def misc_google_business_get_reviews(
        self,
        team_id: str,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessReviewsResponse:
        """List the Google Reviews pulled in by an import, with paging and your remaining import capacity. Use it to
        build a review inbox or monitor rating trends.

        Args:
            team_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviews400Error1 |
                ApiV1MiscGoogleBusinessReviews401Error1 | ApiV1MiscGoogleBusinessReviews403Error1 |
                ApiV1MiscGoogleBusinessReviews404Error1 | ApiV1MiscGoogleBusinessReviews429Error1 |
                ApiV1MiscGoogleBusinessReviews500Error1 | ApiV1MiscGoogleBusinessReviews502Error1 |
                ApiV1MiscGoogleBusinessReviews503Error1 | ApiV1MiscGoogleBusinessReviews504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_get_reviews(
                team_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def misc_google_business_get_service_list(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscGoogleBusinessLocationServiceListResponse:
        """Retrieve the services listed on your Google Business Profile, including custom services and prices.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationServiceList400Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList401Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList403Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList404Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList429Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList500Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList502Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList503Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_get_service_list(
                team_id, request_options=request_options
            ),
        )

    async def misc_google_business_import_reviews(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessReviewsImportRequest | ApiV1MiscGoogleBusinessReviewsImportRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessReviewsImportResponse:
        """Kick off an asynchronous import that pulls your Google Business Profile reviews into bundle.social so you can
        read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 409 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessReviewsImport400Error1 | ApiV1MiscGoogleBusinessReviewsImport401Error1 |
                ApiV1MiscGoogleBusinessReviewsImport403Error1 | ApiV1MiscGoogleBusinessReviewsImport404Error1 |
                ApiV1MiscGoogleBusinessReviewsImport409Error1 | ApiV1MiscGoogleBusinessReviewsImport429Error1 |
                ApiV1MiscGoogleBusinessReviewsImport500Error1 | ApiV1MiscGoogleBusinessReviewsImport502Error1 |
                ApiV1MiscGoogleBusinessReviewsImport503Error1 | ApiV1MiscGoogleBusinessReviewsImport504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_import_reviews(
                body=body, request_options=request_options
            ),
        )

    async def misc_google_business_list_available_attributes(
        self,
        team_id: str,
        *,
        language_code: str | None = None,
        region_code: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse:
        """List the attributes Google allows for your location's category and country. Check this before updating
        attributes, since the valid set differs per business category. ``regionCode``/``languageCode`` are honoured by
        looking the attributes up through the location's primary category; when that category or a region code cannot be
        resolved (common for service-area businesses with no storefront address) the location's own defaults are
        returned instead and ``lookup.by`` comes back as ``location``, meaning those two parameters were not applied.

        Args:
            team_id: Value sent with the request.
            language_code: Value sent with the request.
            region_code: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1 |
                ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_list_available_attributes(
                team_id,
                language_code=language_code,
                region_code=region_code,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def misc_google_business_list_categories(
        self,
        team_id: str,
        region_code: str,
        language_code: str,
        *,
        names: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = 50,
        page_token: str | None = None,
        view: ViewOrStr | None = View.BASIC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse:
        """Requires ``regionCode`` and ``languageCode``. Default ``view=BASIC``. Optional ``names`` fetches exact
        category IDs through ``categories:batchGet``; otherwise ``filter`` supports ``displayName`` prefix search.

        Args:
            team_id: Value sent with the request.
            region_code: Value sent with the request.
            language_code: Value sent with the request.
            names: Value sent with the request.
            filter_: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            view: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1 |
                ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_list_categories(
                team_id,
                region_code,
                language_code,
                names=names,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                view=view,
                request_options=request_options,
            ),
        )

    async def misc_google_business_list_media(
        self,
        team_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessMediaResponse1:
        """List the photos and videos on your Google Business Profile, with paging. Use it to audit which images are
        live before adding or removing media.

        Args:
            team_id: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessMedia400Error1 |
                ApiV1MiscGoogleBusinessMedia401Error1 | ApiV1MiscGoogleBusinessMedia403Error1 |
                ApiV1MiscGoogleBusinessMedia404Error1 | ApiV1MiscGoogleBusinessMedia429Error1 |
                ApiV1MiscGoogleBusinessMedia500Error1 | ApiV1MiscGoogleBusinessMedia502Error1 |
                ApiV1MiscGoogleBusinessMedia503Error1 | ApiV1MiscGoogleBusinessMedia504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_list_media(
                team_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def misc_google_business_list_place_action_links(
        self,
        team_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse:
        """List the action links on your Google Business Profile, such as booking, ordering, or reservation URLs.

        Args:
            team_id: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_list_place_action_links(
                team_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def misc_google_business_list_search_keywords(
        self,
        team_id: str,
        start_month: str,
        end_month: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse:
        """Monthly search keyword impressions for your selected location. ``startMonth``/``endMonth`` are inclusive
        ``YYYY-MM`` values; counts are aggregated across the whole range, so request a single month for a per-month
        figure. Each keyword returns either an exact ``value`` or a ``threshold``, meaning the real count is below that
        number: low-volume keywords are only ever reported as a threshold, so treat a null ``value`` as suppressed
        rather than zero. Counts are unique users, not raw impressions. Paginated with ``pageToken``/``nextPageToken``,
        max ``pageSize`` 100.

        Args:
            team_id: Value sent with the request.
            start_month: Month in ``YYYY-MM`` format, inclusive.
            end_month: Month in ``YYYY-MM`` format, inclusive.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1 |
                ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_list_search_keywords(
                team_id,
                start_month,
                end_month,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def misc_google_business_reply_to_review(
        self,
        review_id: str,
        *,
        body: ApiV1MiscGoogleBusinessReviewsReplyRequest | ApiV1MiscGoogleBusinessReviewsReplyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessReviewsReplyResponse:
        """Publish or update the owner reply on a Google Review. Google allows one owner reply per review, so sending
        again overwrites the previous text.

        Args:
            review_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessReviewsReply400Error1 |
                ApiV1MiscGoogleBusinessReviewsReply401Error1 | ApiV1MiscGoogleBusinessReviewsReply403Error1 |
                ApiV1MiscGoogleBusinessReviewsReply404Error1 | ApiV1MiscGoogleBusinessReviewsReply429Error1 |
                ApiV1MiscGoogleBusinessReviewsReply500Error1 | ApiV1MiscGoogleBusinessReviewsReply502Error1 |
                ApiV1MiscGoogleBusinessReviewsReply503Error1 | ApiV1MiscGoogleBusinessReviewsReply504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_reply_to_review(
                review_id, body=body, request_options=request_options
            ),
        )

    async def misc_google_business_update_attributes(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationAttributesRequest
            | ApiV1MiscGoogleBusinessLocationAttributesRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationAttributesResponse:
        """Set or change attributes on your Google Business Profile location. Complete attributes help your listing
        surface for more specific local searches.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationAttributes400Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes401Error1 | ApiV1MiscGoogleBusinessLocationAttributes403Error1
                | ApiV1MiscGoogleBusinessLocationAttributes404Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes429Error1 | ApiV1MiscGoogleBusinessLocationAttributes500Error1
                | ApiV1MiscGoogleBusinessLocationAttributes502Error1 |
                ApiV1MiscGoogleBusinessLocationAttributes503Error1 | ApiV1MiscGoogleBusinessLocationAttributes504Error1
                | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_update_attributes(
                body=body, request_options=request_options
            ),
        )

    async def misc_google_business_update_food_menus(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationFoodMenusRequest | ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationFoodMenusResponse:
        """Body requires ``fields`` (``menus``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationFoodMenus400Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus401Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus403Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus404Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus429Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus500Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus502Error1 | ApiV1MiscGoogleBusinessLocationFoodMenus503Error1
                | ApiV1MiscGoogleBusinessLocationFoodMenus504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_update_food_menus(
                body=body, request_options=request_options
            ),
        )

    async def misc_google_business_update_hours(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationHoursRequest | ApiV1MiscGoogleBusinessLocationHoursRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationHoursResponse:
        """Body requires ``fields`` (``regularHours``, ``specialHours``, ``moreHours``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessLocationHours400Error1 |
                ApiV1MiscGoogleBusinessLocationHours401Error1 | ApiV1MiscGoogleBusinessLocationHours403Error1 |
                ApiV1MiscGoogleBusinessLocationHours404Error1 | ApiV1MiscGoogleBusinessLocationHours429Error1 |
                ApiV1MiscGoogleBusinessLocationHours500Error1 | ApiV1MiscGoogleBusinessLocationHours502Error1 |
                ApiV1MiscGoogleBusinessLocationHours503Error1 | ApiV1MiscGoogleBusinessLocationHours504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_update_hours(body=body, request_options=request_options)
        )

    async def misc_google_business_update_location(
        self,
        *,
        body: ApiV1MiscGoogleBusinessLocationRequest | ApiV1MiscGoogleBusinessLocationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationResponse:
        """Field mask is derived automatically from provided fields.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscGoogleBusinessLocation400Error1 |
                ApiV1MiscGoogleBusinessLocation401Error1 | ApiV1MiscGoogleBusinessLocation403Error1 |
                ApiV1MiscGoogleBusinessLocation404Error1 | ApiV1MiscGoogleBusinessLocation429Error1 |
                ApiV1MiscGoogleBusinessLocation500Error1 | ApiV1MiscGoogleBusinessLocation502Error1 |
                ApiV1MiscGoogleBusinessLocation503Error1 | ApiV1MiscGoogleBusinessLocation504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_update_location(
                body=body, request_options=request_options
            ),
        )

    async def misc_google_business_update_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1:
        """Body requires ``fields`` (``uri``, ``placeActionType``, ``isPreferred``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1 |
                ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_update_place_action_link(
                body=body, request_options=request_options
            ),
        )

    async def misc_google_business_update_service_list(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationServiceListRequest
            | ApiV1MiscGoogleBusinessLocationServiceListRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscGoogleBusinessLocationServiceListResponse:
        """Body requires ``fields`` (``serviceItems``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1MiscGoogleBusinessLocationServiceList400Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList401Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList403Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList404Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList429Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList500Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList502Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList503Error1 |
                ApiV1MiscGoogleBusinessLocationServiceList504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_google_business_update_service_list(
                body=body, request_options=request_options
            ),
        )

    async def misc_instagram_business_discovery(
        self, team_id: str, username: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscInstagramTagsResponse:
        """Checks if an Instagram user exists and returns their public profile data. Only works for Business and Creator
        accounts and only when Instagram is connected via Facebook Login. Returns followers_count, media_count, and
        profile picture if available.

        Args:
            team_id: Value sent with the request.
            username: Instagram username to search for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscInstagramTags400Error1 |
                ApiV1MiscInstagramTags401Error1 | ApiV1MiscInstagramTags403Error1 | ApiV1MiscInstagramTags404Error1 |
                ApiV1MiscInstagramTags429Error1 | ApiV1MiscInstagramTags500Error1 | ApiV1MiscInstagramTags502Error1 |
                ApiV1MiscInstagramTags503Error1 | ApiV1MiscInstagramTags504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_instagram_business_discovery(
                team_id, username, request_options=request_options
            ),
        )

    async def misc_instagram_delete_comment(
        self,
        *,
        body: ApiV1MiscInstagramCommentRequest | ApiV1MiscInstagramCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscInstagramCommentResponse:
        """Permanently delete a published Instagram comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscInstagramComment400Error1 |
                ApiV1MiscInstagramComment401Error1 | ApiV1MiscInstagramComment403Error1 |
                ApiV1MiscInstagramComment404Error1 | ApiV1MiscInstagramComment429Error1 |
                ApiV1MiscInstagramComment500Error1 | ApiV1MiscInstagramComment502Error1 |
                ApiV1MiscInstagramComment503Error1 | ApiV1MiscInstagramComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_instagram_delete_comment(body=body, request_options=request_options)
        )

    async def misc_instagram_search_audio(
        self,
        team_id: str,
        audio_type: AudioTypeOrStr,
        *,
        search_query: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscInstagramAudioResponse:
        """Searches Instagram music or original sounds that can be attached to Reels. Only works for Instagram accounts
        connected via Facebook Login.

        Args:
            team_id: Value sent with the request.
            audio_type: The type of Instagram audio to search for.
            search_query: Optional keyword search query.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscInstagramAudio400Error1 |
                ApiV1MiscInstagramAudio401Error1 | ApiV1MiscInstagramAudio403Error1 | ApiV1MiscInstagramAudio404Error1 |
                ApiV1MiscInstagramAudio429Error1 | ApiV1MiscInstagramAudio500Error1 | ApiV1MiscInstagramAudio502Error1 |
                ApiV1MiscInstagramAudio503Error1 | ApiV1MiscInstagramAudio504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_instagram_search_audio(
                team_id, audio_type, search_query=search_query, request_options=request_options
            ),
        )

    async def misc_instagram_search_locations(
        self, team_id: str, q: str, *, limit: int | None = 10, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscInstagramLocationsResponse:
        """Searches Facebook Pages with physical location data and returns IDs that can be used as
        data.INSTAGRAM.locationId.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search location pages
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscInstagramLocations400Error1 |
                ApiV1MiscInstagramLocations401Error1 | ApiV1MiscInstagramLocations403Error1 |
                ApiV1MiscInstagramLocations404Error1 | ApiV1MiscInstagramLocations429Error1 |
                ApiV1MiscInstagramLocations500Error1 | ApiV1MiscInstagramLocations502Error1 |
                ApiV1MiscInstagramLocations503Error1 | ApiV1MiscInstagramLocations504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_instagram_search_locations(
                team_id, q, limit=limit, request_options=request_options
            ),
        )

    async def misc_linkedin_build_commentary(
        self,
        *,
        body: ApiV1MiscLinkedinMentionsBuilderRequest | ApiV1MiscLinkedinMentionsBuilderRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinMentionsBuilderResponse:
        """If tag already exists (case insensitive), mentions replace it; otherwise they're appended to the end.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinMentionsBuilder400Error1 |
                ApiV1MiscLinkedinMentionsBuilder401Error1 | ApiV1MiscLinkedinMentionsBuilder403Error1 |
                ApiV1MiscLinkedinMentionsBuilder404Error1 | ApiV1MiscLinkedinMentionsBuilder429Error1 |
                ApiV1MiscLinkedinMentionsBuilder500Error1 | ApiV1MiscLinkedinMentionsBuilder502Error1 |
                ApiV1MiscLinkedinMentionsBuilder503Error1 | ApiV1MiscLinkedinMentionsBuilder504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_linkedin_build_commentary(body=body, request_options=request_options)
        )

    async def misc_linkedin_delete_comment(
        self,
        *,
        body: ApiV1MiscLinkedinCommentRequest1 | ApiV1MiscLinkedinCommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinCommentResponse1:
        """Permanently delete a published LinkedIn comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinComment400Error1 |
                ApiV1MiscLinkedinComment401Error1 | ApiV1MiscLinkedinComment403Error1 |
                ApiV1MiscLinkedinComment404Error1 | ApiV1MiscLinkedinComment429Error1 |
                ApiV1MiscLinkedinComment500Error1 | ApiV1MiscLinkedinComment502Error1 |
                ApiV1MiscLinkedinComment503Error1 | ApiV1MiscLinkedinComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_linkedin_delete_comment(body=body, request_options=request_options)
        )

    async def misc_linkedin_delete_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostRequest1 | ApiV1MiscLinkedinPostRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinPostResponse1:
        """Permanently delete a published LinkedIn post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinPost400Error1 |
                ApiV1MiscLinkedinPost401Error1 | ApiV1MiscLinkedinPost403Error1 | ApiV1MiscLinkedinPost404Error1 |
                ApiV1MiscLinkedinPost429Error1 | ApiV1MiscLinkedinPost500Error1 | ApiV1MiscLinkedinPost502Error1 |
                ApiV1MiscLinkedinPost503Error1 | ApiV1MiscLinkedinPost504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_linkedin_delete_post(body=body, request_options=request_options)
        )

    async def misc_linkedin_edit_comment(
        self,
        *,
        body: ApiV1MiscLinkedinCommentRequest | ApiV1MiscLinkedinCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinCommentResponse:
        """Update the text content of a published LinkedIn comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinComment400Error1 |
                ApiV1MiscLinkedinComment401Error1 | ApiV1MiscLinkedinComment403Error1 |
                ApiV1MiscLinkedinComment404Error1 | ApiV1MiscLinkedinComment429Error1 |
                ApiV1MiscLinkedinComment500Error1 | ApiV1MiscLinkedinComment502Error1 |
                ApiV1MiscLinkedinComment503Error1 | ApiV1MiscLinkedinComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_linkedin_edit_comment(body=body, request_options=request_options)
        )

    async def misc_linkedin_edit_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostRequest | ApiV1MiscLinkedinPostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinPostResponse:
        """Update the text content of a published LinkedIn post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinPost400Error1 |
                ApiV1MiscLinkedinPost401Error1 | ApiV1MiscLinkedinPost403Error1 | ApiV1MiscLinkedinPost404Error1 |
                ApiV1MiscLinkedinPost429Error1 | ApiV1MiscLinkedinPost500Error1 | ApiV1MiscLinkedinPost502Error1 |
                ApiV1MiscLinkedinPost503Error1 | ApiV1MiscLinkedinPost504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.misc_linkedin_edit_post(body=body, request_options=request_options))

    async def misc_linkedin_get_tags(
        self,
        team_id: str,
        *,
        q: str | None = None,
        url: str | None = None,
        display_name: str | None = None,
        scope: ScopeOrStr | None = Scope.ALL,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinMentionsTagsResponse:
        """Search for LinkedIn people and organizations that can be @-mentioned, and get the tag IDs needed to insert
        them into post text. LinkedIn only renders a mention when the display text matches the entity's name exactly
        (case sensitive), so a vanity slug never works. When a person is resolved from ``url`` but LinkedIn does not
        expose their name, the tag comes back with an empty ``display`` and ``needsDisplayName: true`` — pass
        ``displayName`` to set it. Note that a page can only mention its own followers.

        Args:
            team_id: Value sent with the request.
            q: Value sent with the request.
            url: Value sent with the request.
            display_name: Value sent with the request.
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinMentionsTags400Error1 |
                ApiV1MiscLinkedinMentionsTags401Error1 | ApiV1MiscLinkedinMentionsTags403Error1 |
                ApiV1MiscLinkedinMentionsTags404Error1 | ApiV1MiscLinkedinMentionsTags429Error1 |
                ApiV1MiscLinkedinMentionsTags500Error1 | ApiV1MiscLinkedinMentionsTags502Error1 |
                ApiV1MiscLinkedinMentionsTags503Error1 | ApiV1MiscLinkedinMentionsTags504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_linkedin_get_tags(
                team_id, q=q, url=url, display_name=display_name, scope=scope, request_options=request_options
            ),
        )

    async def misc_linkedin_reshare_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostReshareRequest | ApiV1MiscLinkedinPostReshareRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscLinkedinPostReshareResponse:
        """Create a LinkedIn reshare as the currently selected LinkedIn channel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 422 429 500 502 503 504 ``error`` is ``ApiV1MiscLinkedinPostReshare400Error1 |
                ApiV1MiscLinkedinPostReshare401Error1 | ApiV1MiscLinkedinPostReshare403Error1 |
                ApiV1MiscLinkedinPostReshare404Error1 | ApiV1MiscLinkedinPostReshare422Error1 |
                ApiV1MiscLinkedinPostReshare429Error1 | ApiV1MiscLinkedinPostReshare500Error1 |
                ApiV1MiscLinkedinPostReshare502Error1 | ApiV1MiscLinkedinPostReshare503Error1 |
                ApiV1MiscLinkedinPostReshare504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_linkedin_reshare_post(body=body, request_options=request_options)
        )

    async def misc_mastodon_delete_comment(
        self,
        *,
        body: ApiV1MiscMastodonCommentRequest1 | ApiV1MiscMastodonCommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscMastodonCommentResponse1:
        """Permanently delete a published Mastodon reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscMastodonComment400Error1 |
                ApiV1MiscMastodonComment401Error1 | ApiV1MiscMastodonComment403Error1 |
                ApiV1MiscMastodonComment404Error1 | ApiV1MiscMastodonComment429Error1 |
                ApiV1MiscMastodonComment500Error1 | ApiV1MiscMastodonComment502Error1 |
                ApiV1MiscMastodonComment503Error1 | ApiV1MiscMastodonComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_mastodon_delete_comment(body=body, request_options=request_options)
        )

    async def misc_mastodon_delete_status(
        self,
        *,
        body: ApiV1MiscMastodonStatusRequest1 | ApiV1MiscMastodonStatusRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscMastodonStatusResponse1:
        """Permanently delete a published Mastodon status.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscMastodonStatus400Error1 |
                ApiV1MiscMastodonStatus401Error1 | ApiV1MiscMastodonStatus403Error1 | ApiV1MiscMastodonStatus404Error1 |
                ApiV1MiscMastodonStatus429Error1 | ApiV1MiscMastodonStatus500Error1 | ApiV1MiscMastodonStatus502Error1 |
                ApiV1MiscMastodonStatus503Error1 | ApiV1MiscMastodonStatus504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_mastodon_delete_status(body=body, request_options=request_options)
        )

    async def misc_mastodon_edit_comment(
        self,
        *,
        body: ApiV1MiscMastodonCommentRequest | ApiV1MiscMastodonCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscMastodonCommentResponse:
        """Update the text content of a published Mastodon reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscMastodonComment400Error1 |
                ApiV1MiscMastodonComment401Error1 | ApiV1MiscMastodonComment403Error1 |
                ApiV1MiscMastodonComment404Error1 | ApiV1MiscMastodonComment429Error1 |
                ApiV1MiscMastodonComment500Error1 | ApiV1MiscMastodonComment502Error1 |
                ApiV1MiscMastodonComment503Error1 | ApiV1MiscMastodonComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_mastodon_edit_comment(body=body, request_options=request_options)
        )

    async def misc_mastodon_edit_status(
        self,
        *,
        body: ApiV1MiscMastodonStatusRequest | ApiV1MiscMastodonStatusRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscMastodonStatusResponse:
        """Update the text content and spoiler text of a published Mastodon status.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscMastodonStatus400Error1 |
                ApiV1MiscMastodonStatus401Error1 | ApiV1MiscMastodonStatus403Error1 | ApiV1MiscMastodonStatus404Error1 |
                ApiV1MiscMastodonStatus429Error1 | ApiV1MiscMastodonStatus500Error1 | ApiV1MiscMastodonStatus502Error1 |
                ApiV1MiscMastodonStatus503Error1 | ApiV1MiscMastodonStatus504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_mastodon_edit_status(body=body, request_options=request_options)
        )

    async def misc_pinterest_delete_pin(
        self,
        *,
        body: ApiV1MiscPinterestPinRequest1 | ApiV1MiscPinterestPinRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscPinterestPinResponse1:
        """Permanently delete a published Pinterest pin.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscPinterestPin400Error1 |
                ApiV1MiscPinterestPin401Error1 | ApiV1MiscPinterestPin403Error1 | ApiV1MiscPinterestPin404Error1 |
                ApiV1MiscPinterestPin429Error1 | ApiV1MiscPinterestPin500Error1 | ApiV1MiscPinterestPin502Error1 |
                ApiV1MiscPinterestPin503Error1 | ApiV1MiscPinterestPin504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_pinterest_delete_pin(body=body, request_options=request_options)
        )

    async def misc_pinterest_edit_pin(
        self,
        *,
        body: ApiV1MiscPinterestPinRequest | ApiV1MiscPinterestPinRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscPinterestPinResponse:
        """Temporarily disabled

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscPinterestPin400Error1 |
                ApiV1MiscPinterestPin401Error1 | ApiV1MiscPinterestPin403Error1 | ApiV1MiscPinterestPin404Error1 |
                ApiV1MiscPinterestPin429Error1 | ApiV1MiscPinterestPin500Error1 | ApiV1MiscPinterestPin502Error1 |
                ApiV1MiscPinterestPin503Error1 | ApiV1MiscPinterestPin504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.misc_pinterest_edit_pin(body=body, request_options=request_options))

    async def misc_reddit_delete_comment(
        self,
        *,
        body: ApiV1MiscRedditCommentRequest1 | ApiV1MiscRedditCommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscRedditCommentResponse1:
        """Permanently delete a published Reddit comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditComment400Error1 |
                ApiV1MiscRedditComment401Error1 | ApiV1MiscRedditComment403Error1 | ApiV1MiscRedditComment404Error1 |
                ApiV1MiscRedditComment429Error1 | ApiV1MiscRedditComment500Error1 | ApiV1MiscRedditComment502Error1 |
                ApiV1MiscRedditComment503Error1 | ApiV1MiscRedditComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_reddit_delete_comment(body=body, request_options=request_options)
        )

    async def misc_reddit_delete_post(
        self,
        *,
        body: ApiV1MiscRedditPostRequest1 | ApiV1MiscRedditPostRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscRedditPostResponse1:
        """Permanently delete a published Reddit post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditPost400Error1 |
                ApiV1MiscRedditPost401Error1 | ApiV1MiscRedditPost403Error1 | ApiV1MiscRedditPost404Error1 |
                ApiV1MiscRedditPost429Error1 | ApiV1MiscRedditPost500Error1 | ApiV1MiscRedditPost502Error1 |
                ApiV1MiscRedditPost503Error1 | ApiV1MiscRedditPost504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.misc_reddit_delete_post(body=body, request_options=request_options))

    async def misc_reddit_edit_comment(
        self,
        *,
        body: ApiV1MiscRedditCommentRequest | ApiV1MiscRedditCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscRedditCommentResponse:
        """Update the text content of a published Reddit comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditComment400Error1 |
                ApiV1MiscRedditComment401Error1 | ApiV1MiscRedditComment403Error1 | ApiV1MiscRedditComment404Error1 |
                ApiV1MiscRedditComment429Error1 | ApiV1MiscRedditComment500Error1 | ApiV1MiscRedditComment502Error1 |
                ApiV1MiscRedditComment503Error1 | ApiV1MiscRedditComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_reddit_edit_comment(body=body, request_options=request_options)
        )

    async def misc_reddit_edit_post(
        self,
        *,
        body: ApiV1MiscRedditPostRequest | ApiV1MiscRedditPostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscRedditPostResponse:
        """Update the selftext content of a published Reddit text post. Link and media posts cannot be edited.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditPost400Error1 |
                ApiV1MiscRedditPost401Error1 | ApiV1MiscRedditPost403Error1 | ApiV1MiscRedditPost404Error1 |
                ApiV1MiscRedditPost429Error1 | ApiV1MiscRedditPost500Error1 | ApiV1MiscRedditPost502Error1 |
                ApiV1MiscRedditPost503Error1 | ApiV1MiscRedditPost504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.misc_reddit_edit_post(body=body, request_options=request_options))

    async def misc_reddit_get_post_requirements(
        self, team_id: str, subreddit: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscRedditPostRequirementsResponse:
        """Check a subreddit's posting rules before publishing, including whether flair is enabled or mandatory. Call
        this first to avoid rejected submissions.

        Args:
            team_id: Value sent with the request.
            subreddit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditPostRequirements400Error1 |
                ApiV1MiscRedditPostRequirements401Error1 | ApiV1MiscRedditPostRequirements403Error1 |
                ApiV1MiscRedditPostRequirements404Error1 | ApiV1MiscRedditPostRequirements429Error1 |
                ApiV1MiscRedditPostRequirements500Error1 | ApiV1MiscRedditPostRequirements502Error1 |
                ApiV1MiscRedditPostRequirements503Error1 | ApiV1MiscRedditPostRequirements504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_reddit_get_post_requirements(
                team_id, subreddit, request_options=request_options
            ),
        )

    async def misc_reddit_get_subreddit_flairs(
        self, team_id: str, subreddit: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[ApiV1MiscRedditSubredditFlairsResponse]:
        """List the flairs available in a subreddit so you can attach a valid flair ID when creating a Reddit post.

        Args:
            team_id: Value sent with the request.
            subreddit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscRedditSubredditFlairs400Error1 |
                ApiV1MiscRedditSubredditFlairs401Error1 | ApiV1MiscRedditSubredditFlairs403Error1 |
                ApiV1MiscRedditSubredditFlairs404Error1 | ApiV1MiscRedditSubredditFlairs429Error1 |
                ApiV1MiscRedditSubredditFlairs500Error1 | ApiV1MiscRedditSubredditFlairs502Error1 |
                ApiV1MiscRedditSubredditFlairs503Error1 | ApiV1MiscRedditSubredditFlairs504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_reddit_get_subreddit_flairs(
                team_id, subreddit, request_options=request_options
            ),
        )

    async def misc_slack_delete_message(
        self,
        *,
        body: ApiV1MiscSlackMessageRequest1 | ApiV1MiscSlackMessageRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscSlackMessageResponse1:
        """Permanently delete a published Slack message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscSlackMessage400Error1 |
                ApiV1MiscSlackMessage401Error1 | ApiV1MiscSlackMessage403Error1 | ApiV1MiscSlackMessage404Error1 |
                ApiV1MiscSlackMessage429Error1 | ApiV1MiscSlackMessage500Error1 | ApiV1MiscSlackMessage502Error1 |
                ApiV1MiscSlackMessage503Error1 | ApiV1MiscSlackMessage504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_slack_delete_message(body=body, request_options=request_options)
        )

    async def misc_slack_edit_message(
        self,
        *,
        body: ApiV1MiscSlackMessageRequest | ApiV1MiscSlackMessageRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscSlackMessageResponse:
        """Update the text content of a published Slack message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscSlackMessage400Error1 |
                ApiV1MiscSlackMessage401Error1 | ApiV1MiscSlackMessage403Error1 | ApiV1MiscSlackMessage404Error1 |
                ApiV1MiscSlackMessage429Error1 | ApiV1MiscSlackMessage500Error1 | ApiV1MiscSlackMessage502Error1 |
                ApiV1MiscSlackMessage503Error1 | ApiV1MiscSlackMessage504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.misc_slack_edit_message(body=body, request_options=request_options))

    async def misc_tiktok_delete_comment(
        self,
        *,
        body: ApiV1MiscTiktokCommentRequest | ApiV1MiscTiktokCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscTiktokCommentResponse:
        """Delete a published TikTok comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTiktokComment400Error1 |
                ApiV1MiscTiktokComment401Error1 | ApiV1MiscTiktokComment403Error1 | ApiV1MiscTiktokComment404Error1 |
                ApiV1MiscTiktokComment429Error1 | ApiV1MiscTiktokComment500Error1 | ApiV1MiscTiktokComment502Error1 |
                ApiV1MiscTiktokComment503Error1 | ApiV1MiscTiktokComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_tiktok_delete_comment(body=body, request_options=request_options)
        )

    async def misc_tiktok_get_commercial_music_trending_list(
        self,
        team_id: str,
        *,
        genre: GenreOrStr | None = Genre.POP,
        date_range: DateRangeOrStr | None = DateRange._7_DAY,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ApiV1MiscTiktokCmlTrendingListResponse]:
        """Retrieve up to 100 popular tracks pre-cleared for organic content and ad creation from TikTok CML.

        Args:
            team_id: Value sent with the request.
            genre: Genre filter for commercial music results.
            date_range: Timeframe for popular tracks ranking.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of trending tracks.

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTiktokCmlTrendingList400Error1 |
                ApiV1MiscTiktokCmlTrendingList401Error1 | ApiV1MiscTiktokCmlTrendingList403Error1 |
                ApiV1MiscTiktokCmlTrendingList404Error1 | ApiV1MiscTiktokCmlTrendingList429Error1 |
                ApiV1MiscTiktokCmlTrendingList500Error1 | ApiV1MiscTiktokCmlTrendingList502Error1 |
                ApiV1MiscTiktokCmlTrendingList503Error1 | ApiV1MiscTiktokCmlTrendingList504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_tiktok_get_commercial_music_trending_list(
                team_id, genre=genre, date_range=date_range, request_options=request_options
            ),
        )

    async def misc_tiktok_get_post_settings(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscTiktokPostSettingsResponse:
        """Returns the privacy levels, interaction settings (comments, duet, stitch) and maximum video duration the
        connected TikTok account allows, read live from TikTok. A value the account does not allow is not rejected when
        you create the post, it fails at publish time with TT:40002. Use it to build the options of your own composer,
        not as a check before every publish: each call counts against the account's TikTok rate limit.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTiktokPostSettings400Error1 |
                ApiV1MiscTiktokPostSettings401Error1 | ApiV1MiscTiktokPostSettings403Error1 |
                ApiV1MiscTiktokPostSettings404Error1 | ApiV1MiscTiktokPostSettings429Error1 |
                ApiV1MiscTiktokPostSettings500Error1 | ApiV1MiscTiktokPostSettings502Error1 |
                ApiV1MiscTiktokPostSettings503Error1 | ApiV1MiscTiktokPostSettings504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_tiktok_get_post_settings(team_id, request_options=request_options)
        )

    async def misc_tiktok_search_locations(
        self, team_id: str, q: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscTiktokLocationsResponse:
        """Searches location tags available to the connected TikTok account (up to 20 results). Pass ``locationId`` and
        ``name`` as data.TIKTOK.locationId and data.TIKTOK.locationName to show the location on a video or photo post.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search TikTok location tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTiktokLocations400Error1 |
                ApiV1MiscTiktokLocations401Error1 | ApiV1MiscTiktokLocations403Error1 |
                ApiV1MiscTiktokLocations404Error1 | ApiV1MiscTiktokLocations429Error1 |
                ApiV1MiscTiktokLocations500Error1 | ApiV1MiscTiktokLocations502Error1 |
                ApiV1MiscTiktokLocations503Error1 | ApiV1MiscTiktokLocations504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_tiktok_search_locations(team_id, q, request_options=request_options)
        )

    async def misc_twitter_delete_comment(
        self,
        *,
        body: ApiV1MiscTwitterCommentRequest | ApiV1MiscTwitterCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscTwitterCommentResponse:
        """Permanently delete a published Twitter/X reply/comment. X charges for deletes ($0.01 per request).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTwitterComment400Error1 |
                ApiV1MiscTwitterComment401Error1 | ApiV1MiscTwitterComment403Error1 | ApiV1MiscTwitterComment404Error1 |
                ApiV1MiscTwitterComment429Error1 | ApiV1MiscTwitterComment500Error1 | ApiV1MiscTwitterComment502Error1 |
                ApiV1MiscTwitterComment503Error1 | ApiV1MiscTwitterComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_twitter_delete_comment(body=body, request_options=request_options)
        )

    async def misc_twitter_delete_tweet(
        self,
        *,
        body: ApiV1MiscTwitterTweetRequest | ApiV1MiscTwitterTweetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscTwitterTweetResponse:
        """Permanently delete a published Twitter/X tweet. X charges for deletes ($0.01 per request).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTwitterTweet400Error1 |
                ApiV1MiscTwitterTweet401Error1 | ApiV1MiscTwitterTweet403Error1 | ApiV1MiscTwitterTweet404Error1 |
                ApiV1MiscTwitterTweet429Error1 | ApiV1MiscTwitterTweet500Error1 | ApiV1MiscTwitterTweet502Error1 |
                ApiV1MiscTwitterTweet503Error1 | ApiV1MiscTwitterTweet504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_twitter_delete_tweet(body=body, request_options=request_options)
        )

    async def misc_twitter_retweet(
        self,
        *,
        body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscTwitterRetweetResponse:
        """Repost (retweet) any X post from the connected account. X charges for reposts ($0.015 per request); your
        credits are charged once per post, per connected account, per UTC day, so reposting the same post again on the
        same day costs no extra credit. Reposting a post that is already reposted is a no-op on X's side.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTwitterRetweet400Error1 |
                ApiV1MiscTwitterRetweet401Error1 | ApiV1MiscTwitterRetweet403Error1 | ApiV1MiscTwitterRetweet404Error1 |
                ApiV1MiscTwitterRetweet429Error1 | ApiV1MiscTwitterRetweet500Error1 | ApiV1MiscTwitterRetweet502Error1 |
                ApiV1MiscTwitterRetweet503Error1 | ApiV1MiscTwitterRetweet504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.misc_twitter_retweet(body=body, request_options=request_options))

    async def misc_twitter_unretweet(
        self,
        *,
        body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscTwitterRetweetResponse:
        """Remove a repost (retweet) made by the connected account. X charges for this too ($0.01 per request); your
        credits are charged once per post, per connected account, per UTC day, the same way reposting is.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscTwitterRetweet400Error1 |
                ApiV1MiscTwitterRetweet401Error1 | ApiV1MiscTwitterRetweet403Error1 | ApiV1MiscTwitterRetweet404Error1 |
                ApiV1MiscTwitterRetweet429Error1 | ApiV1MiscTwitterRetweet500Error1 | ApiV1MiscTwitterRetweet502Error1 |
                ApiV1MiscTwitterRetweet503Error1 | ApiV1MiscTwitterRetweet504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.misc_twitter_unretweet(body=body, request_options=request_options))

    async def misc_youtube_add_video_to_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistItemsRequest | ApiV1MiscYoutubePlaylistItemsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubePlaylistItemsResponse:
        """Append a video to a YouTube playlist on a connected channel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylistItems400Error1 |
                ApiV1MiscYoutubePlaylistItems401Error1 | ApiV1MiscYoutubePlaylistItems403Error1 |
                ApiV1MiscYoutubePlaylistItems404Error1 | ApiV1MiscYoutubePlaylistItems429Error1 |
                ApiV1MiscYoutubePlaylistItems500Error1 | ApiV1MiscYoutubePlaylistItems502Error1 |
                ApiV1MiscYoutubePlaylistItems503Error1 | ApiV1MiscYoutubePlaylistItems504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_add_video_to_playlist(body=body, request_options=request_options)
        )

    async def misc_youtube_create_new_channel_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistRequest | ApiV1MiscYoutubePlaylistRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubePlaylistResponse1:
        """Create a playlist on a connected YouTube channel with a title, description, and privacy status. Playlists
        group related videos and increase session watch time.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylist400Error1 |
                ApiV1MiscYoutubePlaylist401Error1 | ApiV1MiscYoutubePlaylist403Error1 |
                ApiV1MiscYoutubePlaylist404Error1 | ApiV1MiscYoutubePlaylist429Error1 |
                ApiV1MiscYoutubePlaylist500Error1 | ApiV1MiscYoutubePlaylist502Error1 |
                ApiV1MiscYoutubePlaylist503Error1 | ApiV1MiscYoutubePlaylist504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_create_new_channel_playlist(
                body=body, request_options=request_options
            ),
        )

    async def misc_youtube_delete_channel_playlist(
        self, playlist_id: str, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> bool:
        """Permanently delete a playlist from a connected YouTube channel. The videos themselves are not deleted.

        Args:
            playlist_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylist400Error1 |
                ApiV1MiscYoutubePlaylist401Error1 | ApiV1MiscYoutubePlaylist403Error1 |
                ApiV1MiscYoutubePlaylist404Error1 | ApiV1MiscYoutubePlaylist429Error1 |
                ApiV1MiscYoutubePlaylist500Error1 | ApiV1MiscYoutubePlaylist502Error1 |
                ApiV1MiscYoutubePlaylist503Error1 | ApiV1MiscYoutubePlaylist504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_delete_channel_playlist(
                playlist_id, team_id, request_options=request_options
            ),
        )

    async def misc_youtube_delete_comment(
        self,
        *,
        body: ApiV1MiscYoutubeCommentRequest1 | ApiV1MiscYoutubeCommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubeCommentResponse1:
        """Permanently delete a published YouTube comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeComment400Error1 |
                ApiV1MiscYoutubeComment401Error1 | ApiV1MiscYoutubeComment403Error1 | ApiV1MiscYoutubeComment404Error1 |
                ApiV1MiscYoutubeComment429Error1 | ApiV1MiscYoutubeComment500Error1 | ApiV1MiscYoutubeComment502Error1 |
                ApiV1MiscYoutubeComment503Error1 | ApiV1MiscYoutubeComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_delete_comment(body=body, request_options=request_options)
        )

    async def misc_youtube_delete_video(
        self,
        *,
        body: ApiV1MiscYoutubeVideoRequest1 | ApiV1MiscYoutubeVideoRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubeVideoResponse1:
        """Permanently delete a published YouTube video.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeVideo400Error1 |
                ApiV1MiscYoutubeVideo401Error1 | ApiV1MiscYoutubeVideo403Error1 | ApiV1MiscYoutubeVideo404Error1 |
                ApiV1MiscYoutubeVideo429Error1 | ApiV1MiscYoutubeVideo500Error1 | ApiV1MiscYoutubeVideo502Error1 |
                ApiV1MiscYoutubeVideo503Error1 | ApiV1MiscYoutubeVideo504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_delete_video(body=body, request_options=request_options)
        )

    async def misc_youtube_delete_video_from_playlist(
        self, playlist_item_id: str, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> bool:
        """Remove a single video from a YouTube playlist. Pass the playlist item ID, not the video ID. The video itself
        stays on the channel.

        Args:
            playlist_item_id: Playlist item ID (not video ID)
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylistItems400Error1 |
                ApiV1MiscYoutubePlaylistItems401Error1 | ApiV1MiscYoutubePlaylistItems403Error1 |
                ApiV1MiscYoutubePlaylistItems404Error1 | ApiV1MiscYoutubePlaylistItems429Error1 |
                ApiV1MiscYoutubePlaylistItems500Error1 | ApiV1MiscYoutubePlaylistItems502Error1 |
                ApiV1MiscYoutubePlaylistItems503Error1 | ApiV1MiscYoutubePlaylistItems504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_delete_video_from_playlist(
                playlist_item_id, team_id, request_options=request_options
            ),
        )

    async def misc_youtube_edit_comment(
        self,
        *,
        body: ApiV1MiscYoutubeCommentRequest | ApiV1MiscYoutubeCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubeCommentResponse:
        """Update the text content of a published YouTube comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeComment400Error1 |
                ApiV1MiscYoutubeComment401Error1 | ApiV1MiscYoutubeComment403Error1 | ApiV1MiscYoutubeComment404Error1 |
                ApiV1MiscYoutubeComment429Error1 | ApiV1MiscYoutubeComment500Error1 | ApiV1MiscYoutubeComment502Error1 |
                ApiV1MiscYoutubeComment503Error1 | ApiV1MiscYoutubeComment504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_edit_comment(body=body, request_options=request_options)
        )

    async def misc_youtube_edit_video(
        self,
        *,
        body: ApiV1MiscYoutubeVideoRequest | ApiV1MiscYoutubeVideoRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubeVideoResponse:
        """Update the title, description, tags, category, or privacy status of a published YouTube video.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeVideo400Error1 |
                ApiV1MiscYoutubeVideo401Error1 | ApiV1MiscYoutubeVideo403Error1 | ApiV1MiscYoutubeVideo404Error1 |
                ApiV1MiscYoutubeVideo429Error1 | ApiV1MiscYoutubeVideo500Error1 | ApiV1MiscYoutubeVideo502Error1 |
                ApiV1MiscYoutubeVideo503Error1 | ApiV1MiscYoutubeVideo504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.misc_youtube_edit_video(body=body, request_options=request_options))

    async def misc_youtube_get_channel_playlist(
        self, team_id: str, *, max_results: int | None = 10, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscYoutubePlaylistResponse:
        """List the playlists on a connected YouTube channel, with their IDs, titles, and privacy status.

        Args:
            team_id: Value sent with the request.
            max_results: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylist400Error1 |
                ApiV1MiscYoutubePlaylist401Error1 | ApiV1MiscYoutubePlaylist403Error1 |
                ApiV1MiscYoutubePlaylist404Error1 | ApiV1MiscYoutubePlaylist429Error1 |
                ApiV1MiscYoutubePlaylist500Error1 | ApiV1MiscYoutubePlaylist502Error1 |
                ApiV1MiscYoutubePlaylist503Error1 | ApiV1MiscYoutubePlaylist504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_get_channel_playlist(
                team_id, max_results=max_results, request_options=request_options
            ),
        )

    async def misc_youtube_get_regions(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscYoutubeRegionsResponse:
        """Retrieve the list of content regions that the YouTube website supports.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeRegions400Error1 |
                ApiV1MiscYoutubeRegions401Error1 | ApiV1MiscYoutubeRegions403Error1 | ApiV1MiscYoutubeRegions404Error1 |
                ApiV1MiscYoutubeRegions429Error1 | ApiV1MiscYoutubeRegions500Error1 | ApiV1MiscYoutubeRegions502Error1 |
                ApiV1MiscYoutubeRegions503Error1 | ApiV1MiscYoutubeRegions504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.misc_youtube_get_regions(team_id, request_options=request_options))

    async def misc_youtube_get_video_categories(
        self, team_id: str, *, region_code: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1MiscYoutubeVideoCategoriesResponse:
        """Retrieve the list of video categories that can be associated with YouTube videos for a specific region.

        Args:
            team_id: Value sent with the request.
            region_code: ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'PL'). Defaults to 'US'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeVideoCategories400Error1 |
                ApiV1MiscYoutubeVideoCategories401Error1 | ApiV1MiscYoutubeVideoCategories403Error1 |
                ApiV1MiscYoutubeVideoCategories404Error1 | ApiV1MiscYoutubeVideoCategories429Error1 |
                ApiV1MiscYoutubeVideoCategories500Error1 | ApiV1MiscYoutubeVideoCategories502Error1 |
                ApiV1MiscYoutubeVideoCategories503Error1 | ApiV1MiscYoutubeVideoCategories504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_get_video_categories(
                team_id, region_code=region_code, request_options=request_options
            ),
        )

    async def misc_youtube_get_videos_from_playlist(
        self,
        team_id: str,
        playlist_id: str,
        *,
        max_results: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubePlaylistItemsResponse1:
        """List the videos in a YouTube playlist, including the playlist item IDs required to remove individual entries.

        Args:
            team_id: Value sent with the request.
            playlist_id: Value sent with the request.
            max_results: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylistItems400Error1 |
                ApiV1MiscYoutubePlaylistItems401Error1 | ApiV1MiscYoutubePlaylistItems403Error1 |
                ApiV1MiscYoutubePlaylistItems404Error1 | ApiV1MiscYoutubePlaylistItems429Error1 |
                ApiV1MiscYoutubePlaylistItems500Error1 | ApiV1MiscYoutubePlaylistItems502Error1 |
                ApiV1MiscYoutubePlaylistItems503Error1 | ApiV1MiscYoutubePlaylistItems504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_get_videos_from_playlist(
                team_id, playlist_id, max_results=max_results, request_options=request_options
            ),
        )

    async def misc_youtube_set_thumbnail(
        self,
        *,
        body: ApiV1MiscYoutubeThumbnailRequest | ApiV1MiscYoutubeThumbnailRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubeThumbnailResponse:
        """Upload a custom thumbnail for a published YouTube video. Custom thumbnails require a verified channel and
        strongly influence click-through rate.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubeThumbnail400Error1 |
                ApiV1MiscYoutubeThumbnail401Error1 | ApiV1MiscYoutubeThumbnail403Error1 |
                ApiV1MiscYoutubeThumbnail404Error1 | ApiV1MiscYoutubeThumbnail429Error1 |
                ApiV1MiscYoutubeThumbnail500Error1 | ApiV1MiscYoutubeThumbnail502Error1 |
                ApiV1MiscYoutubeThumbnail503Error1 | ApiV1MiscYoutubeThumbnail504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_set_thumbnail(body=body, request_options=request_options)
        )

    async def misc_youtube_update_channel_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistRequest1 | ApiV1MiscYoutubePlaylistRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1MiscYoutubePlaylistResponse1:
        """Change the title, description, or privacy status of a YouTube playlist on a connected channel. Send the
        playlist ID together with the fields you want to update.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1MiscYoutubePlaylist400Error1 |
                ApiV1MiscYoutubePlaylist401Error1 | ApiV1MiscYoutubePlaylist403Error1 |
                ApiV1MiscYoutubePlaylist404Error1 | ApiV1MiscYoutubePlaylist429Error1 |
                ApiV1MiscYoutubePlaylist500Error1 | ApiV1MiscYoutubePlaylist502Error1 |
                ApiV1MiscYoutubePlaylist503Error1 | ApiV1MiscYoutubePlaylist504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.misc_youtube_update_channel_playlist(
                body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMiscWithRawResponse:
        return self._with_raw_response


class MiscWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def misc_bluesky_delete_comment(
        self,
        *,
        body: ApiV1MiscBlueskyCommentRequest | ApiV1MiscBlueskyCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscBlueskyCommentResponse, MiscBlueskyDeleteCommentErrorBody]:
        """Permanently delete a published Bluesky reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/bluesky/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscBlueskyCommentRequest | ApiV1MiscBlueskyCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscBlueskyCommentResponse],
            error_mapper=misc_bluesky_delete_comment_error_mapper,
            request_options=request_options,
        )

    def misc_bluesky_delete_post(
        self,
        *,
        body: ApiV1MiscBlueskyPostRequest | ApiV1MiscBlueskyPostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscBlueskyPostResponse, MiscBlueskyDeletePostErrorBody]:
        """Permanently delete a published Bluesky post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/bluesky/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscBlueskyPostRequest | ApiV1MiscBlueskyPostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscBlueskyPostResponse],
            error_mapper=misc_bluesky_delete_post_error_mapper,
            request_options=request_options,
        )

    def misc_discord_delete_message(
        self,
        *,
        body: ApiV1MiscDiscordMessageRequest | ApiV1MiscDiscordMessageRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscDiscordMessageResponse, MiscDiscordDeleteMessageErrorBody]:
        """Permanently delete a published Discord message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/discord/message"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscDiscordMessageRequest | ApiV1MiscDiscordMessageRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscDiscordMessageResponse],
            error_mapper=misc_discord_delete_message_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_delete_comment(
        self,
        *,
        body: ApiV1MiscFacebookCommentRequest1 | ApiV1MiscFacebookCommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookCommentResponse1, MiscFacebookDeleteCommentErrorBody]:
        """Permanently delete a published Facebook comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/facebook/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscFacebookCommentRequest1 | ApiV1MiscFacebookCommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookCommentResponse1],
            error_mapper=misc_facebook_delete_comment_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_delete_post(
        self,
        *,
        body: ApiV1MiscFacebookPostRequest1 | ApiV1MiscFacebookPostRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookPostResponse1, MiscFacebookDeletePostErrorBody]:
        """Permanently delete a published Facebook post or reel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/facebook/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscFacebookPostRequest1 | ApiV1MiscFacebookPostRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookPostResponse1],
            error_mapper=misc_facebook_delete_post_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_edit_comment(
        self,
        *,
        body: ApiV1MiscFacebookCommentRequest | ApiV1MiscFacebookCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookCommentResponse, MiscFacebookEditCommentErrorBody]:
        """Update the text content of a published Facebook comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/facebook/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscFacebookCommentRequest | ApiV1MiscFacebookCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookCommentResponse],
            error_mapper=misc_facebook_edit_comment_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_edit_post(
        self,
        *,
        body: ApiV1MiscFacebookPostRequest | ApiV1MiscFacebookPostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookPostResponse, MiscFacebookEditPostErrorBody]:
        """Update the message/content of a published Facebook post or reel. Note: Only text content can be edited, media
        cannot be changed.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/facebook/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscFacebookPostRequest | ApiV1MiscFacebookPostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookPostResponse],
            error_mapper=misc_facebook_edit_post_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_get_recommendation_by_id(
        self, recommendation_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsResponse1, MiscFacebookGetRecommendationByIdErrorBody]:
        """Retrieve one imported Facebook recommendation with its rating, text, author, and existing replies.

        Args:
            recommendation_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/{recommendationId}"),
            path_params=[param[str]("recommendationId", recommendation_id)],
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookRecommendationsResponse1],
            error_mapper=misc_facebook_get_recommendation_by_id_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_get_recommendation_comments(
        self, recommendation_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsCommentsResponse, MiscFacebookGetRecommendationCommentsErrorBody]:
        """List the comments in a Facebook recommendation thread so you can see the full conversation before replying.

        Args:
            recommendation_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/{recommendationId}/comments"),
            path_params=[param[str]("recommendationId", recommendation_id)],
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookRecommendationsCommentsResponse],
            error_mapper=misc_facebook_get_recommendation_comments_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_get_recommendation_import_by_id(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsImportResponse, MiscFacebookGetRecommendationImportByIdErrorBody]:
        """Check the status, progress, and result of a single Facebook recommendations import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/import/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookRecommendationsImportResponse],
            error_mapper=misc_facebook_get_recommendation_import_by_id_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_get_recommendation_import_status(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsImportResponse1, MiscFacebookGetRecommendationImportStatusErrorBody]:
        """List Facebook recommendation import jobs for a team so you can monitor which imports are queued, running,
        finished, or failed.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/import"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookRecommendationsImportResponse1],
            error_mapper=misc_facebook_get_recommendation_import_status_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_get_recommendations(
        self,
        team_id: str,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsResponse, MiscFacebookGetRecommendationsErrorBody]:
        """List the Facebook Page recommendations pulled in by an import, with paging and your remaining import
        capacity. Use it to build a reputation-management inbox.

        Args:
            team_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations"),
            query_params=[
                param[str]("teamId", team_id),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookRecommendationsResponse],
            error_mapper=misc_facebook_get_recommendations_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_get_text_format_presets(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookTextFormatPresetsResponse, MiscFacebookGetTextFormatPresetsErrorBody]:
        """Return the text background presets (colored statuses) that can be passed as data.FACEBOOK.textFormatPresetId,
        grouped by whether each one renders as a flat color, a gradient, or an illustration. Facebook exposes no
        endpoint of its own for this, so read the list from here instead of hardcoding IDs. Any other numeric ID is also
        accepted and passed straight through to Facebook.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/text-format-presets"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookTextFormatPresetsResponse],
            error_mapper=misc_facebook_get_text_format_presets_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_get_token_debug(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookTokenDebugResponse, MiscFacebookGetTokenDebugErrorBody]:
        """Inspect a connected Facebook account's access token, including its scopes and expiry. Use it to diagnose
        permission errors when publishing fails.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/token-debug"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookTokenDebugResponse],
            error_mapper=misc_facebook_get_token_debug_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_import_recommendations(
        self,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsImportRequest | ApiV1MiscFacebookRecommendationsImportRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsImportResponse, MiscFacebookImportRecommendationsErrorBody]:
        """Kick off an asynchronous import that pulls recommendations left on your Facebook Page into bundle.social so
        you can read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscFacebookRecommendationsImportRequest | ApiV1MiscFacebookRecommendationsImportRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookRecommendationsImportResponse],
            error_mapper=misc_facebook_import_recommendations_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_reply_to_recommendation(
        self,
        recommendation_id: str,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsReplyRequest | ApiV1MiscFacebookRecommendationsReplyRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsReplyResponse, MiscFacebookReplyToRecommendationErrorBody]:
        """Publish a Page reply to a Facebook recommendation. Use it to respond to reviews programmatically instead of
        through Meta Business Suite.

        Args:
            recommendation_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/{recommendationId}/reply"),
            path_params=[param[str]("recommendationId", recommendation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscFacebookRecommendationsReplyRequest | ApiV1MiscFacebookRecommendationsReplyRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookRecommendationsReplyResponse],
            error_mapper=misc_facebook_reply_to_recommendation_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_reply_to_recommendation_comment(
        self,
        recommendation_id: str,
        comment_id: str,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsCommentsReplyRequest
            | ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscFacebookRecommendationsCommentsReplyResponse, MiscFacebookReplyToRecommendationCommentErrorBody
    ]:
        """Publish a reply to a specific comment inside a Facebook recommendation thread.

        Args:
            recommendation_id: Value sent with the request.
            comment_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/api/v1/misc/facebook/recommendations/{recommendationId}/comments/{commentId}/reply"
            ),
            path_params=[param[str]("recommendationId", recommendation_id), param[str]("commentId", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscFacebookRecommendationsCommentsReplyRequest
                    | ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookRecommendationsCommentsReplyResponse],
            error_mapper=misc_facebook_reply_to_recommendation_comment_error_mapper,
            request_options=request_options,
        )

    def misc_facebook_search_pages(
        self, team_id: str, q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookPagesResponse, MiscFacebookSearchPagesErrorBody]:
        """Searches public Facebook Pages and returns IDs that can be inserted into Facebook Page mention tokens.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search Facebook Pages
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/pages"),
            query_params=[param[str]("teamId", team_id), param[str]("q", q), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscFacebookPagesResponse],
            error_mapper=misc_facebook_search_pages_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_add_media(
        self,
        *,
        body: ApiV1MiscGoogleBusinessMediaRequest | ApiV1MiscGoogleBusinessMediaRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessMediaResponse, MiscGoogleBusinessAddMediaErrorBody]:
        """Publish a photo or video to your Google Business Profile from a bundle.social upload, tagged with a category
        such as exterior, interior, or product. Fresh photos are a local ranking and conversion signal.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/google-business/media"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscGoogleBusinessMediaRequest | ApiV1MiscGoogleBusinessMediaRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessMediaResponse],
            error_mapper=misc_google_business_add_media_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_create_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, MiscGoogleBusinessCreatePlaceActionLinkErrorBody
    ]:
        """Add an action link such as Book, Order online, or Reserve to your Google Business Profile so customers can
        convert straight from the listing.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/google-business/location/place-action-links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest
                    | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1],
            error_mapper=misc_google_business_create_place_action_link_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_delete_media(
        self,
        *,
        body: ApiV1MiscGoogleBusinessMediaRequest1 | ApiV1MiscGoogleBusinessMediaRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessMediaResponse2, MiscGoogleBusinessDeleteMediaErrorBody]:
        """Remove a photo or video from your Google Business Profile.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/google-business/media"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscGoogleBusinessMediaRequest1 | ApiV1MiscGoogleBusinessMediaRequest1Dict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessMediaResponse2],
            error_mapper=misc_google_business_delete_media_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_delete_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3, MiscGoogleBusinessDeletePlaceActionLinkErrorBody
    ]:
        """Remove an action link from your Google Business Profile, for example when a booking URL is retired.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/google-business/location/place-action-links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2
                    | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3],
            error_mapper=misc_google_business_delete_place_action_link_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_delete_post(
        self,
        *,
        body: ApiV1MiscGoogleBusinessPostRequest | ApiV1MiscGoogleBusinessPostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessPostResponse, MiscGoogleBusinessDeletePostErrorBody]:
        """Permanently delete a published Google Business post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/google-business/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscGoogleBusinessPostRequest | ApiV1MiscGoogleBusinessPostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessPostResponse],
            error_mapper=misc_google_business_delete_post_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_delete_review_reply(
        self,
        review_id: str,
        *,
        body: (
            ApiV1MiscGoogleBusinessReviewsReplyRequest1 | ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsReplyResponse, MiscGoogleBusinessDeleteReviewReplyErrorBody]:
        """Remove your owner reply from a Google Review, leaving the customer's review in place.

        Args:
            review_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/{reviewId}/reply"),
            path_params=[param[str]("reviewId", review_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscGoogleBusinessReviewsReplyRequest1 | ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessReviewsReplyResponse],
            error_mapper=misc_google_business_delete_review_reply_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_get_attributes(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationAttributesResponse, MiscGoogleBusinessGetAttributesErrorBody]:
        """Retrieve the attributes currently set on your Google Business Profile location, such as accessibility,
        payment options, or amenities.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/attributes"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationAttributesResponse],
            error_mapper=misc_google_business_get_attributes_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_get_food_menus(
        self,
        team_id: str,
        *,
        fields: list[Field3OrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationFoodMenusResponse, MiscGoogleBusinessGetFoodMenusErrorBody]:
        """Use typed query param ``fields``. Supports both comma-separated values (``fields=name,menus``) and repeated
        params (``fields=name&fields=menus``).

        Args:
            team_id: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/food-menus"),
            query_params=[param[str]("teamId", team_id), param[list[Field3OrStr] | None]("fields", fields)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationFoodMenusResponse],
            error_mapper=misc_google_business_get_food_menus_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_get_location(
        self,
        team_id: str,
        *,
        fields: list[FieldBundleSocialMiscApiOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationResponse, MiscGoogleBusinessGetLocationErrorBody]:
        """Use typed query param ``fields``. Supports both comma-separated values (``fields=name,title``) and repeated
        params (``fields=name&fields=title``).

        Args:
            team_id: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location"),
            query_params=[
                param[str]("teamId", team_id), param[list[FieldBundleSocialMiscApiOrStr] | None]("fields", fields)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationResponse],
            error_mapper=misc_google_business_get_location_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_get_review_by_id(
        self, review_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsResponse1, MiscGoogleBusinessGetReviewByIdErrorBody]:
        """Retrieve one imported Google Review with its star rating, text, reviewer, and any existing owner reply.

        Args:
            review_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/{reviewId}"),
            path_params=[param[str]("reviewId", review_id)],
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessReviewsResponse1],
            error_mapper=misc_google_business_get_review_by_id_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_get_review_import_by_id(
        self, import_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsImportResponse, MiscGoogleBusinessGetReviewImportByIdErrorBody]:
        """Check the status, progress, and result of a single Google Reviews import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/import/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessReviewsImportResponse],
            error_mapper=misc_google_business_get_review_import_by_id_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_get_review_import_status(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsImportResponse1, MiscGoogleBusinessGetReviewImportStatusErrorBody]:
        """List Google Review import jobs for a team so you can monitor which imports are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/import"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessReviewsImportResponse1],
            error_mapper=misc_google_business_get_review_import_status_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_get_reviews(
        self,
        team_id: str,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsResponse, MiscGoogleBusinessGetReviewsErrorBody]:
        """List the Google Reviews pulled in by an import, with paging and your remaining import capacity. Use it to
        build a review inbox or monitor rating trends.

        Args:
            team_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/reviews"),
            query_params=[
                param[str]("teamId", team_id),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessReviewsResponse],
            error_mapper=misc_google_business_get_reviews_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_get_service_list(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationServiceListResponse, MiscGoogleBusinessGetServiceListErrorBody]:
        """Retrieve the services listed on your Google Business Profile, including custom services and prices.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/service-list"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationServiceListResponse],
            error_mapper=misc_google_business_get_service_list_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_import_reviews(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessReviewsImportRequest | ApiV1MiscGoogleBusinessReviewsImportRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsImportResponse, MiscGoogleBusinessImportReviewsErrorBody]:
        """Kick off an asynchronous import that pulls your Google Business Profile reviews into bundle.social so you can
        read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscGoogleBusinessReviewsImportRequest | ApiV1MiscGoogleBusinessReviewsImportRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessReviewsImportResponse],
            error_mapper=misc_google_business_import_reviews_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_list_available_attributes(
        self,
        team_id: str,
        *,
        language_code: str | None = None,
        region_code: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse, MiscGoogleBusinessListAvailableAttributesErrorBody
    ]:
        """List the attributes Google allows for your location's category and country. Check this before updating
        attributes, since the valid set differs per business category. ``regionCode``/``languageCode`` are honoured by
        looking the attributes up through the location's primary category; when that category or a region code cannot be
        resolved (common for service-area businesses with no storefront address) the location's own defaults are
        returned instead and ``lookup.by`` comes back as ``location``, meaning those two parameters were not applied.

        Args:
            team_id: Value sent with the request.
            language_code: Value sent with the request.
            region_code: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/attributes/available"),
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("languageCode", language_code),
                param[str | None]("regionCode", region_code),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse],
            error_mapper=misc_google_business_list_available_attributes_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_list_categories(
        self,
        team_id: str,
        region_code: str,
        language_code: str,
        *,
        names: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = 50,
        page_token: str | None = None,
        view: ViewOrStr | None = View.BASIC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse, MiscGoogleBusinessListCategoriesErrorBody
    ]:
        """Requires ``regionCode`` and ``languageCode``. Default ``view=BASIC``. Optional ``names`` fetches exact
        category IDs through ``categories:batchGet``; otherwise ``filter`` supports ``displayName`` prefix search.

        Args:
            team_id: Value sent with the request.
            region_code: Value sent with the request.
            language_code: Value sent with the request.
            names: Value sent with the request.
            filter_: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            view: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/categories/available"),
            query_params=[
                param[str]("teamId", team_id),
                param[str]("regionCode", region_code),
                param[str]("languageCode", language_code),
                param[list[str] | None]("names", names),
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[ViewOrStr | None]("view", view),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse],
            error_mapper=misc_google_business_list_categories_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_list_media(
        self,
        team_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessMediaResponse1, MiscGoogleBusinessListMediaErrorBody]:
        """List the photos and videos on your Google Business Profile, with paging. Use it to audit which images are
        live before adding or removing media.

        Args:
            team_id: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/media"),
            query_params=[
                param[str]("teamId", team_id),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessMediaResponse1],
            error_mapper=misc_google_business_list_media_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_list_place_action_links(
        self,
        team_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse, MiscGoogleBusinessListPlaceActionLinksErrorBody
    ]:
        """List the action links on your Google Business Profile, such as booking, ordering, or reservation URLs.

        Args:
            team_id: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/place-action-links"),
            query_params=[
                param[str]("teamId", team_id),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse],
            error_mapper=misc_google_business_list_place_action_links_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_list_search_keywords(
        self,
        team_id: str,
        start_month: str,
        end_month: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse, MiscGoogleBusinessListSearchKeywordsErrorBody
    ]:
        """Monthly search keyword impressions for your selected location. ``startMonth``/``endMonth`` are inclusive
        ``YYYY-MM`` values; counts are aggregated across the whole range, so request a single month for a per-month
        figure. Each keyword returns either an exact ``value`` or a ``threshold``, meaning the real count is below that
        number: low-volume keywords are only ever reported as a threshold, so treat a null ``value`` as suppressed
        rather than zero. Counts are unique users, not raw impressions. Paginated with ``pageToken``/``nextPageToken``,
        max ``pageSize`` 100.

        Args:
            team_id: Value sent with the request.
            start_month: Month in ``YYYY-MM`` format, inclusive.
            end_month: Month in ``YYYY-MM`` format, inclusive.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/search-keywords"),
            query_params=[
                param[str]("teamId", team_id),
                param[str]("startMonth", start_month),
                param[str]("endMonth", end_month),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse],
            error_mapper=misc_google_business_list_search_keywords_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_reply_to_review(
        self,
        review_id: str,
        *,
        body: ApiV1MiscGoogleBusinessReviewsReplyRequest | ApiV1MiscGoogleBusinessReviewsReplyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsReplyResponse, MiscGoogleBusinessReplyToReviewErrorBody]:
        """Publish or update the owner reply on a Google Review. Google allows one owner reply per review, so sending
        again overwrites the previous text.

        Args:
            review_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/{reviewId}/reply"),
            path_params=[param[str]("reviewId", review_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscGoogleBusinessReviewsReplyRequest | ApiV1MiscGoogleBusinessReviewsReplyRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessReviewsReplyResponse],
            error_mapper=misc_google_business_reply_to_review_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_update_attributes(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationAttributesRequest
            | ApiV1MiscGoogleBusinessLocationAttributesRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationAttributesResponse, MiscGoogleBusinessUpdateAttributesErrorBody]:
        """Set or change attributes on your Google Business Profile location. Complete attributes help your listing
        surface for more specific local searches.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location/attributes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationAttributesRequest
                    | ApiV1MiscGoogleBusinessLocationAttributesRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationAttributesResponse],
            error_mapper=misc_google_business_update_attributes_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_update_food_menus(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationFoodMenusRequest | ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationFoodMenusResponse, MiscGoogleBusinessUpdateFoodMenusErrorBody]:
        """Body requires ``fields`` (``menus``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location/food-menus"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationFoodMenusRequest
                    | ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationFoodMenusResponse],
            error_mapper=misc_google_business_update_food_menus_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_update_hours(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationHoursRequest | ApiV1MiscGoogleBusinessLocationHoursRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationHoursResponse, MiscGoogleBusinessUpdateHoursErrorBody]:
        """Body requires ``fields`` (``regularHours``, ``specialHours``, ``moreHours``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location/hours"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscGoogleBusinessLocationHoursRequest | ApiV1MiscGoogleBusinessLocationHoursRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationHoursResponse],
            error_mapper=misc_google_business_update_hours_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_update_location(
        self,
        *,
        body: ApiV1MiscGoogleBusinessLocationRequest | ApiV1MiscGoogleBusinessLocationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationResponse, MiscGoogleBusinessUpdateLocationErrorBody]:
        """Field mask is derived automatically from provided fields.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscGoogleBusinessLocationRequest | ApiV1MiscGoogleBusinessLocationRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationResponse],
            error_mapper=misc_google_business_update_location_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_update_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, MiscGoogleBusinessUpdatePlaceActionLinkErrorBody
    ]:
        """Body requires ``fields`` (``uri``, ``placeActionType``, ``isPreferred``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location/place-action-links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1
                    | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1],
            error_mapper=misc_google_business_update_place_action_link_error_mapper,
            request_options=request_options,
        )

    def misc_google_business_update_service_list(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationServiceListRequest
            | ApiV1MiscGoogleBusinessLocationServiceListRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationServiceListResponse, MiscGoogleBusinessUpdateServiceListErrorBody]:
        """Body requires ``fields`` (``serviceItems``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location/service-list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationServiceListRequest
                    | ApiV1MiscGoogleBusinessLocationServiceListRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscGoogleBusinessLocationServiceListResponse],
            error_mapper=misc_google_business_update_service_list_error_mapper,
            request_options=request_options,
        )

    def misc_instagram_business_discovery(
        self, team_id: str, username: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscInstagramTagsResponse, MiscInstagramBusinessDiscoveryErrorBody]:
        """Checks if an Instagram user exists and returns their public profile data. Only works for Business and Creator
        accounts and only when Instagram is connected via Facebook Login. Returns followers_count, media_count, and
        profile picture if available.

        Args:
            team_id: Value sent with the request.
            username: Instagram username to search for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/instagram/tags"),
            query_params=[param[str]("teamId", team_id), param[str]("username", username)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscInstagramTagsResponse],
            error_mapper=misc_instagram_business_discovery_error_mapper,
            request_options=request_options,
        )

    def misc_instagram_delete_comment(
        self,
        *,
        body: ApiV1MiscInstagramCommentRequest | ApiV1MiscInstagramCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscInstagramCommentResponse, MiscInstagramDeleteCommentErrorBody]:
        """Permanently delete a published Instagram comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/instagram/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscInstagramCommentRequest | ApiV1MiscInstagramCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscInstagramCommentResponse],
            error_mapper=misc_instagram_delete_comment_error_mapper,
            request_options=request_options,
        )

    def misc_instagram_search_audio(
        self,
        team_id: str,
        audio_type: AudioTypeOrStr,
        *,
        search_query: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscInstagramAudioResponse, MiscInstagramSearchAudioErrorBody]:
        """Searches Instagram music or original sounds that can be attached to Reels. Only works for Instagram accounts
        connected via Facebook Login.

        Args:
            team_id: Value sent with the request.
            audio_type: The type of Instagram audio to search for.
            search_query: Optional keyword search query.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/instagram/audio"),
            query_params=[
                param[str]("teamId", team_id),
                param[AudioTypeOrStr]("audioType", audio_type),
                param[str | None]("searchQuery", search_query),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscInstagramAudioResponse],
            error_mapper=misc_instagram_search_audio_error_mapper,
            request_options=request_options,
        )

    def misc_instagram_search_locations(
        self, team_id: str, q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscInstagramLocationsResponse, MiscInstagramSearchLocationsErrorBody]:
        """Searches Facebook Pages with physical location data and returns IDs that can be used as
        data.INSTAGRAM.locationId.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search location pages
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/instagram/locations"),
            query_params=[param[str]("teamId", team_id), param[str]("q", q), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscInstagramLocationsResponse],
            error_mapper=misc_instagram_search_locations_error_mapper,
            request_options=request_options,
        )

    def misc_linkedin_build_commentary(
        self,
        *,
        body: ApiV1MiscLinkedinMentionsBuilderRequest | ApiV1MiscLinkedinMentionsBuilderRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinMentionsBuilderResponse, MiscLinkedinBuildCommentaryErrorBody]:
        """If tag already exists (case insensitive), mentions replace it; otherwise they're appended to the end.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/linkedin/mentions/builder"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscLinkedinMentionsBuilderRequest | ApiV1MiscLinkedinMentionsBuilderRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscLinkedinMentionsBuilderResponse],
            error_mapper=misc_linkedin_build_commentary_error_mapper,
            request_options=request_options,
        )

    def misc_linkedin_delete_comment(
        self,
        *,
        body: ApiV1MiscLinkedinCommentRequest1 | ApiV1MiscLinkedinCommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinCommentResponse1, MiscLinkedinDeleteCommentErrorBody]:
        """Permanently delete a published LinkedIn comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/linkedin/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscLinkedinCommentRequest1 | ApiV1MiscLinkedinCommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscLinkedinCommentResponse1],
            error_mapper=misc_linkedin_delete_comment_error_mapper,
            request_options=request_options,
        )

    def misc_linkedin_delete_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostRequest1 | ApiV1MiscLinkedinPostRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinPostResponse1, MiscLinkedinDeletePostErrorBody]:
        """Permanently delete a published LinkedIn post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/linkedin/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscLinkedinPostRequest1 | ApiV1MiscLinkedinPostRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscLinkedinPostResponse1],
            error_mapper=misc_linkedin_delete_post_error_mapper,
            request_options=request_options,
        )

    def misc_linkedin_edit_comment(
        self,
        *,
        body: ApiV1MiscLinkedinCommentRequest | ApiV1MiscLinkedinCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinCommentResponse, MiscLinkedinEditCommentErrorBody]:
        """Update the text content of a published LinkedIn comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/linkedin/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscLinkedinCommentRequest | ApiV1MiscLinkedinCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscLinkedinCommentResponse],
            error_mapper=misc_linkedin_edit_comment_error_mapper,
            request_options=request_options,
        )

    def misc_linkedin_edit_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostRequest | ApiV1MiscLinkedinPostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinPostResponse, MiscLinkedinEditPostErrorBody]:
        """Update the text content of a published LinkedIn post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/linkedin/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscLinkedinPostRequest | ApiV1MiscLinkedinPostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscLinkedinPostResponse],
            error_mapper=misc_linkedin_edit_post_error_mapper,
            request_options=request_options,
        )

    def misc_linkedin_get_tags(
        self,
        team_id: str,
        *,
        q: str | None = None,
        url: str | None = None,
        display_name: str | None = None,
        scope: ScopeOrStr | None = Scope.ALL,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinMentionsTagsResponse, MiscLinkedinGetTagsErrorBody]:
        """Search for LinkedIn people and organizations that can be @-mentioned, and get the tag IDs needed to insert
        them into post text. LinkedIn only renders a mention when the display text matches the entity's name exactly
        (case sensitive), so a vanity slug never works. When a person is resolved from ``url`` but LinkedIn does not
        expose their name, the tag comes back with an empty ``display`` and ``needsDisplayName: true`` — pass
        ``displayName`` to set it. Note that a page can only mention its own followers.

        Args:
            team_id: Value sent with the request.
            q: Value sent with the request.
            url: Value sent with the request.
            display_name: Value sent with the request.
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/linkedin/mentions/tags"),
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("q", q),
                param[str | None]("url", url),
                param[str | None]("displayName", display_name),
                param[ScopeOrStr | None]("scope", scope),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscLinkedinMentionsTagsResponse],
            error_mapper=misc_linkedin_get_tags_error_mapper,
            request_options=request_options,
        )

    def misc_linkedin_reshare_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostReshareRequest | ApiV1MiscLinkedinPostReshareRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinPostReshareResponse, MiscLinkedinResharePostErrorBody]:
        """Create a LinkedIn reshare as the currently selected LinkedIn channel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/linkedin/post/reshare"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscLinkedinPostReshareRequest | ApiV1MiscLinkedinPostReshareRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscLinkedinPostReshareResponse],
            error_mapper=misc_linkedin_reshare_post_error_mapper,
            request_options=request_options,
        )

    def misc_mastodon_delete_comment(
        self,
        *,
        body: ApiV1MiscMastodonCommentRequest1 | ApiV1MiscMastodonCommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscMastodonCommentResponse1, MiscMastodonDeleteCommentErrorBody]:
        """Permanently delete a published Mastodon reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/mastodon/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscMastodonCommentRequest1 | ApiV1MiscMastodonCommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscMastodonCommentResponse1],
            error_mapper=misc_mastodon_delete_comment_error_mapper,
            request_options=request_options,
        )

    def misc_mastodon_delete_status(
        self,
        *,
        body: ApiV1MiscMastodonStatusRequest1 | ApiV1MiscMastodonStatusRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscMastodonStatusResponse1, MiscMastodonDeleteStatusErrorBody]:
        """Permanently delete a published Mastodon status.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/mastodon/status"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscMastodonStatusRequest1 | ApiV1MiscMastodonStatusRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscMastodonStatusResponse1],
            error_mapper=misc_mastodon_delete_status_error_mapper,
            request_options=request_options,
        )

    def misc_mastodon_edit_comment(
        self,
        *,
        body: ApiV1MiscMastodonCommentRequest | ApiV1MiscMastodonCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscMastodonCommentResponse, MiscMastodonEditCommentErrorBody]:
        """Update the text content of a published Mastodon reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/mastodon/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscMastodonCommentRequest | ApiV1MiscMastodonCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscMastodonCommentResponse],
            error_mapper=misc_mastodon_edit_comment_error_mapper,
            request_options=request_options,
        )

    def misc_mastodon_edit_status(
        self,
        *,
        body: ApiV1MiscMastodonStatusRequest | ApiV1MiscMastodonStatusRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscMastodonStatusResponse, MiscMastodonEditStatusErrorBody]:
        """Update the text content and spoiler text of a published Mastodon status.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/mastodon/status"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscMastodonStatusRequest | ApiV1MiscMastodonStatusRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscMastodonStatusResponse],
            error_mapper=misc_mastodon_edit_status_error_mapper,
            request_options=request_options,
        )

    def misc_pinterest_delete_pin(
        self,
        *,
        body: ApiV1MiscPinterestPinRequest1 | ApiV1MiscPinterestPinRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscPinterestPinResponse1, MiscPinterestDeletePinErrorBody]:
        """Permanently delete a published Pinterest pin.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/pinterest/pin"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscPinterestPinRequest1 | ApiV1MiscPinterestPinRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscPinterestPinResponse1],
            error_mapper=misc_pinterest_delete_pin_error_mapper,
            request_options=request_options,
        )

    def misc_pinterest_edit_pin(
        self,
        *,
        body: ApiV1MiscPinterestPinRequest | ApiV1MiscPinterestPinRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscPinterestPinResponse, MiscPinterestEditPinErrorBody]:
        """Temporarily disabled

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/pinterest/pin"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscPinterestPinRequest | ApiV1MiscPinterestPinRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscPinterestPinResponse],
            error_mapper=misc_pinterest_edit_pin_error_mapper,
            request_options=request_options,
        )

    def misc_reddit_delete_comment(
        self,
        *,
        body: ApiV1MiscRedditCommentRequest1 | ApiV1MiscRedditCommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscRedditCommentResponse1, MiscRedditDeleteCommentErrorBody]:
        """Permanently delete a published Reddit comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/reddit/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscRedditCommentRequest1 | ApiV1MiscRedditCommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscRedditCommentResponse1],
            error_mapper=misc_reddit_delete_comment_error_mapper,
            request_options=request_options,
        )

    def misc_reddit_delete_post(
        self,
        *,
        body: ApiV1MiscRedditPostRequest1 | ApiV1MiscRedditPostRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscRedditPostResponse1, MiscRedditDeletePostErrorBody]:
        """Permanently delete a published Reddit post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/reddit/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscRedditPostRequest1 | ApiV1MiscRedditPostRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscRedditPostResponse1],
            error_mapper=misc_reddit_delete_post_error_mapper,
            request_options=request_options,
        )

    def misc_reddit_edit_comment(
        self,
        *,
        body: ApiV1MiscRedditCommentRequest | ApiV1MiscRedditCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscRedditCommentResponse, MiscRedditEditCommentErrorBody]:
        """Update the text content of a published Reddit comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/reddit/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscRedditCommentRequest | ApiV1MiscRedditCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscRedditCommentResponse],
            error_mapper=misc_reddit_edit_comment_error_mapper,
            request_options=request_options,
        )

    def misc_reddit_edit_post(
        self,
        *,
        body: ApiV1MiscRedditPostRequest | ApiV1MiscRedditPostRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscRedditPostResponse, MiscRedditEditPostErrorBody]:
        """Update the selftext content of a published Reddit text post. Link and media posts cannot be edited.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/reddit/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscRedditPostRequest | ApiV1MiscRedditPostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscRedditPostResponse],
            error_mapper=misc_reddit_edit_post_error_mapper,
            request_options=request_options,
        )

    def misc_reddit_get_post_requirements(
        self, team_id: str, subreddit: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscRedditPostRequirementsResponse, MiscRedditGetPostRequirementsErrorBody]:
        """Check a subreddit's posting rules before publishing, including whether flair is enabled or mandatory. Call
        this first to avoid rejected submissions.

        Args:
            team_id: Value sent with the request.
            subreddit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/reddit/post-requirements"),
            query_params=[param[str]("teamId", team_id), param[str]("subreddit", subreddit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscRedditPostRequirementsResponse],
            error_mapper=misc_reddit_get_post_requirements_error_mapper,
            request_options=request_options,
        )

    def misc_reddit_get_subreddit_flairs(
        self, team_id: str, subreddit: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[ApiV1MiscRedditSubredditFlairsResponse], MiscRedditGetSubredditFlairsErrorBody]:
        """List the flairs available in a subreddit so you can attach a valid flair ID when creating a Reddit post.

        Args:
            team_id: Value sent with the request.
            subreddit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/reddit/subreddit-flairs"),
            query_params=[param[str]("teamId", team_id), param[str]("subreddit", subreddit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[ApiV1MiscRedditSubredditFlairsResponse]],
            error_mapper=misc_reddit_get_subreddit_flairs_error_mapper,
            request_options=request_options,
        )

    def misc_slack_delete_message(
        self,
        *,
        body: ApiV1MiscSlackMessageRequest1 | ApiV1MiscSlackMessageRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscSlackMessageResponse1, MiscSlackDeleteMessageErrorBody]:
        """Permanently delete a published Slack message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/slack/message"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscSlackMessageRequest1 | ApiV1MiscSlackMessageRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscSlackMessageResponse1],
            error_mapper=misc_slack_delete_message_error_mapper,
            request_options=request_options,
        )

    def misc_slack_edit_message(
        self,
        *,
        body: ApiV1MiscSlackMessageRequest | ApiV1MiscSlackMessageRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscSlackMessageResponse, MiscSlackEditMessageErrorBody]:
        """Update the text content of a published Slack message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/slack/message"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscSlackMessageRequest | ApiV1MiscSlackMessageRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscSlackMessageResponse],
            error_mapper=misc_slack_edit_message_error_mapper,
            request_options=request_options,
        )

    def misc_tiktok_delete_comment(
        self,
        *,
        body: ApiV1MiscTiktokCommentRequest | ApiV1MiscTiktokCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscTiktokCommentResponse, MiscTiktokDeleteCommentErrorBody]:
        """Delete a published TikTok comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/tiktok/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscTiktokCommentRequest | ApiV1MiscTiktokCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscTiktokCommentResponse],
            error_mapper=misc_tiktok_delete_comment_error_mapper,
            request_options=request_options,
        )

    def misc_tiktok_get_commercial_music_trending_list(
        self,
        team_id: str,
        *,
        genre: GenreOrStr | None = Genre.POP,
        date_range: DateRangeOrStr | None = DateRange._7_DAY,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ApiV1MiscTiktokCmlTrendingListResponse], MiscTiktokGetCommercialMusicTrendingListErrorBody]:
        """Retrieve up to 100 popular tracks pre-cleared for organic content and ad creation from TikTok CML.

        Args:
            team_id: Value sent with the request.
            genre: Genre filter for commercial music results.
            date_range: Timeframe for popular tracks ranking.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/tiktok/cml/trending-list"),
            query_params=[
                param[str]("teamId", team_id),
                param[GenreOrStr | None]("genre", genre),
                param[DateRangeOrStr | None]("dateRange", date_range),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[ApiV1MiscTiktokCmlTrendingListResponse]],
            error_mapper=misc_tiktok_get_commercial_music_trending_list_error_mapper,
            request_options=request_options,
        )

    def misc_tiktok_get_post_settings(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscTiktokPostSettingsResponse, MiscTiktokGetPostSettingsErrorBody]:
        """Returns the privacy levels, interaction settings (comments, duet, stitch) and maximum video duration the
        connected TikTok account allows, read live from TikTok. A value the account does not allow is not rejected when
        you create the post, it fails at publish time with TT:40002. Use it to build the options of your own composer,
        not as a check before every publish: each call counts against the account's TikTok rate limit.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/tiktok/post-settings"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscTiktokPostSettingsResponse],
            error_mapper=misc_tiktok_get_post_settings_error_mapper,
            request_options=request_options,
        )

    def misc_tiktok_search_locations(
        self, team_id: str, q: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscTiktokLocationsResponse, MiscTiktokSearchLocationsErrorBody]:
        """Searches location tags available to the connected TikTok account (up to 20 results). Pass ``locationId`` and
        ``name`` as data.TIKTOK.locationId and data.TIKTOK.locationName to show the location on a video or photo post.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search TikTok location tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/tiktok/locations"),
            query_params=[param[str]("teamId", team_id), param[str]("q", q)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscTiktokLocationsResponse],
            error_mapper=misc_tiktok_search_locations_error_mapper,
            request_options=request_options,
        )

    def misc_twitter_delete_comment(
        self,
        *,
        body: ApiV1MiscTwitterCommentRequest | ApiV1MiscTwitterCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscTwitterCommentResponse, MiscTwitterDeleteCommentErrorBody]:
        """Permanently delete a published Twitter/X reply/comment. X charges for deletes ($0.01 per request).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/twitter/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscTwitterCommentRequest | ApiV1MiscTwitterCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscTwitterCommentResponse],
            error_mapper=misc_twitter_delete_comment_error_mapper,
            request_options=request_options,
        )

    def misc_twitter_delete_tweet(
        self,
        *,
        body: ApiV1MiscTwitterTweetRequest | ApiV1MiscTwitterTweetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscTwitterTweetResponse, MiscTwitterDeleteTweetErrorBody]:
        """Permanently delete a published Twitter/X tweet. X charges for deletes ($0.01 per request).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/twitter/tweet"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscTwitterTweetRequest | ApiV1MiscTwitterTweetRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscTwitterTweetResponse],
            error_mapper=misc_twitter_delete_tweet_error_mapper,
            request_options=request_options,
        )

    def misc_twitter_retweet(
        self,
        *,
        body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscTwitterRetweetResponse, MiscTwitterRetweetErrorBody]:
        """Repost (retweet) any X post from the connected account. X charges for reposts ($0.015 per request); your
        credits are charged once per post, per connected account, per UTC day, so reposting the same post again on the
        same day costs no extra credit. Reposting a post that is already reposted is a no-op on X's side.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/twitter/retweet"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscTwitterRetweetResponse],
            error_mapper=misc_twitter_retweet_error_mapper,
            request_options=request_options,
        )

    def misc_twitter_unretweet(
        self,
        *,
        body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscTwitterRetweetResponse, MiscTwitterUnretweetErrorBody]:
        """Remove a repost (retweet) made by the connected account. X charges for this too ($0.01 per request); your
        credits are charged once per post, per connected account, per UTC day, the same way reposting is.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/twitter/retweet"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscTwitterRetweetResponse],
            error_mapper=misc_twitter_unretweet_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_add_video_to_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistItemsRequest | ApiV1MiscYoutubePlaylistItemsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubePlaylistItemsResponse, MiscYoutubeAddVideoToPlaylistErrorBody]:
        """Append a video to a YouTube playlist on a connected channel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/youtube/playlist-items"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubePlaylistItemsRequest | ApiV1MiscYoutubePlaylistItemsRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubePlaylistItemsResponse],
            error_mapper=misc_youtube_add_video_to_playlist_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_create_new_channel_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistRequest | ApiV1MiscYoutubePlaylistRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubePlaylistResponse1, MiscYoutubeCreateNewChannelPlaylistErrorBody]:
        """Create a playlist on a connected YouTube channel with a title, description, and privacy status. Playlists
        group related videos and increase session watch time.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/youtube/playlist"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubePlaylistRequest | ApiV1MiscYoutubePlaylistRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubePlaylistResponse1],
            error_mapper=misc_youtube_create_new_channel_playlist_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_delete_channel_playlist(
        self, playlist_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[bool, MiscYoutubeDeleteChannelPlaylistErrorBody]:
        """Permanently delete a playlist from a connected YouTube channel. The videos themselves are not deleted.

        Args:
            playlist_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/youtube/playlist/{playlistId}"),
            path_params=[param[str]("playlistId", playlist_id)],
            query_params=[param[str]("teamId", team_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[bool],
            error_mapper=misc_youtube_delete_channel_playlist_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_delete_comment(
        self,
        *,
        body: ApiV1MiscYoutubeCommentRequest1 | ApiV1MiscYoutubeCommentRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubeCommentResponse1, MiscYoutubeDeleteCommentErrorBody]:
        """Permanently delete a published YouTube comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/youtube/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubeCommentRequest1 | ApiV1MiscYoutubeCommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubeCommentResponse1],
            error_mapper=misc_youtube_delete_comment_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_delete_video(
        self,
        *,
        body: ApiV1MiscYoutubeVideoRequest1 | ApiV1MiscYoutubeVideoRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubeVideoResponse1, MiscYoutubeDeleteVideoErrorBody]:
        """Permanently delete a published YouTube video.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/youtube/video"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubeVideoRequest1 | ApiV1MiscYoutubeVideoRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubeVideoResponse1],
            error_mapper=misc_youtube_delete_video_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_delete_video_from_playlist(
        self, playlist_item_id: str, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[bool, MiscYoutubeDeleteVideoFromPlaylistErrorBody]:
        """Remove a single video from a YouTube playlist. Pass the playlist item ID, not the video ID. The video itself
        stays on the channel.

        Args:
            playlist_item_id: Playlist item ID (not video ID)
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/youtube/playlist-items/{playlistItemId}"),
            path_params=[param[str]("playlistItemId", playlist_item_id)],
            query_params=[param[str]("teamId", team_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[bool],
            error_mapper=misc_youtube_delete_video_from_playlist_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_edit_comment(
        self,
        *,
        body: ApiV1MiscYoutubeCommentRequest | ApiV1MiscYoutubeCommentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubeCommentResponse, MiscYoutubeEditCommentErrorBody]:
        """Update the text content of a published YouTube comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/youtube/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubeCommentRequest | ApiV1MiscYoutubeCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubeCommentResponse],
            error_mapper=misc_youtube_edit_comment_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_edit_video(
        self,
        *,
        body: ApiV1MiscYoutubeVideoRequest | ApiV1MiscYoutubeVideoRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubeVideoResponse, MiscYoutubeEditVideoErrorBody]:
        """Update the title, description, tags, category, or privacy status of a published YouTube video.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/youtube/video"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubeVideoRequest | ApiV1MiscYoutubeVideoRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubeVideoResponse],
            error_mapper=misc_youtube_edit_video_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_get_channel_playlist(
        self, team_id: str, *, max_results: int | None = 10, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscYoutubePlaylistResponse, MiscYoutubeGetChannelPlaylistErrorBody]:
        """List the playlists on a connected YouTube channel, with their IDs, titles, and privacy status.

        Args:
            team_id: Value sent with the request.
            max_results: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/youtube/playlist"),
            query_params=[param[str]("teamId", team_id), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubePlaylistResponse],
            error_mapper=misc_youtube_get_channel_playlist_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_get_regions(
        self, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscYoutubeRegionsResponse, MiscYoutubeGetRegionsErrorBody]:
        """Retrieve the list of content regions that the YouTube website supports.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/youtube/regions"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubeRegionsResponse],
            error_mapper=misc_youtube_get_regions_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_get_video_categories(
        self, team_id: str, *, region_code: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscYoutubeVideoCategoriesResponse, MiscYoutubeGetVideoCategoriesErrorBody]:
        """Retrieve the list of video categories that can be associated with YouTube videos for a specific region.

        Args:
            team_id: Value sent with the request.
            region_code: ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'PL'). Defaults to 'US'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/youtube/video-categories"),
            query_params=[param[str]("teamId", team_id), param[str | None]("regionCode", region_code)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubeVideoCategoriesResponse],
            error_mapper=misc_youtube_get_video_categories_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_get_videos_from_playlist(
        self,
        team_id: str,
        playlist_id: str,
        *,
        max_results: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubePlaylistItemsResponse1, MiscYoutubeGetVideosFromPlaylistErrorBody]:
        """List the videos in a YouTube playlist, including the playlist item IDs required to remove individual entries.

        Args:
            team_id: Value sent with the request.
            playlist_id: Value sent with the request.
            max_results: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/youtube/playlist-items"),
            query_params=[
                param[str]("teamId", team_id),
                param[str]("playlistId", playlist_id),
                param[int | None]("maxResults", max_results),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubePlaylistItemsResponse1],
            error_mapper=misc_youtube_get_videos_from_playlist_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_set_thumbnail(
        self,
        *,
        body: ApiV1MiscYoutubeThumbnailRequest | ApiV1MiscYoutubeThumbnailRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubeThumbnailResponse, MiscYoutubeSetThumbnailErrorBody]:
        """Upload a custom thumbnail for a published YouTube video. Custom thumbnails require a verified channel and
        strongly influence click-through rate.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/youtube/thumbnail"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubeThumbnailRequest | ApiV1MiscYoutubeThumbnailRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubeThumbnailResponse],
            error_mapper=misc_youtube_set_thumbnail_error_mapper,
            request_options=request_options,
        )

    def misc_youtube_update_channel_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistRequest1 | ApiV1MiscYoutubePlaylistRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubePlaylistResponse1, MiscYoutubeUpdateChannelPlaylistErrorBody]:
        """Change the title, description, or privacy status of a YouTube playlist on a connected channel. Send the
        playlist ID together with the fields you want to update.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/misc/youtube/playlist"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubePlaylistRequest1 | ApiV1MiscYoutubePlaylistRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1MiscYoutubePlaylistResponse1],
            error_mapper=misc_youtube_update_channel_playlist_error_mapper,
            request_options=request_options,
        )


class AsyncMiscWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def misc_bluesky_delete_comment(
        self,
        *,
        body: ApiV1MiscBlueskyCommentRequest | ApiV1MiscBlueskyCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscBlueskyCommentResponse, MiscBlueskyDeleteCommentErrorBody]:
        """Permanently delete a published Bluesky reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/bluesky/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscBlueskyCommentRequest | ApiV1MiscBlueskyCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscBlueskyCommentResponse],
            error_mapper=misc_bluesky_delete_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_bluesky_delete_post(
        self,
        *,
        body: ApiV1MiscBlueskyPostRequest | ApiV1MiscBlueskyPostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscBlueskyPostResponse, MiscBlueskyDeletePostErrorBody]:
        """Permanently delete a published Bluesky post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/bluesky/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscBlueskyPostRequest | ApiV1MiscBlueskyPostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscBlueskyPostResponse],
            error_mapper=misc_bluesky_delete_post_error_mapper,
            request_options=request_options,
        )

    async def misc_discord_delete_message(
        self,
        *,
        body: ApiV1MiscDiscordMessageRequest | ApiV1MiscDiscordMessageRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscDiscordMessageResponse, MiscDiscordDeleteMessageErrorBody]:
        """Permanently delete a published Discord message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/discord/message"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscDiscordMessageRequest | ApiV1MiscDiscordMessageRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscDiscordMessageResponse],
            error_mapper=misc_discord_delete_message_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_delete_comment(
        self,
        *,
        body: ApiV1MiscFacebookCommentRequest1 | ApiV1MiscFacebookCommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookCommentResponse1, MiscFacebookDeleteCommentErrorBody]:
        """Permanently delete a published Facebook comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/facebook/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscFacebookCommentRequest1 | ApiV1MiscFacebookCommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookCommentResponse1],
            error_mapper=misc_facebook_delete_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_delete_post(
        self,
        *,
        body: ApiV1MiscFacebookPostRequest1 | ApiV1MiscFacebookPostRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookPostResponse1, MiscFacebookDeletePostErrorBody]:
        """Permanently delete a published Facebook post or reel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/facebook/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscFacebookPostRequest1 | ApiV1MiscFacebookPostRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookPostResponse1],
            error_mapper=misc_facebook_delete_post_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_edit_comment(
        self,
        *,
        body: ApiV1MiscFacebookCommentRequest | ApiV1MiscFacebookCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookCommentResponse, MiscFacebookEditCommentErrorBody]:
        """Update the text content of a published Facebook comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/facebook/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscFacebookCommentRequest | ApiV1MiscFacebookCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookCommentResponse],
            error_mapper=misc_facebook_edit_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_edit_post(
        self,
        *,
        body: ApiV1MiscFacebookPostRequest | ApiV1MiscFacebookPostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookPostResponse, MiscFacebookEditPostErrorBody]:
        """Update the message/content of a published Facebook post or reel. Note: Only text content can be edited, media
        cannot be changed.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/facebook/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscFacebookPostRequest | ApiV1MiscFacebookPostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookPostResponse],
            error_mapper=misc_facebook_edit_post_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_get_recommendation_by_id(
        self, recommendation_id: str, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsResponse1, MiscFacebookGetRecommendationByIdErrorBody]:
        """Retrieve one imported Facebook recommendation with its rating, text, author, and existing replies.

        Args:
            recommendation_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/{recommendationId}"),
            path_params=[param[str]("recommendationId", recommendation_id)],
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookRecommendationsResponse1],
            error_mapper=misc_facebook_get_recommendation_by_id_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_get_recommendation_comments(
        self, recommendation_id: str, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsCommentsResponse, MiscFacebookGetRecommendationCommentsErrorBody]:
        """List the comments in a Facebook recommendation thread so you can see the full conversation before replying.

        Args:
            recommendation_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/{recommendationId}/comments"),
            path_params=[param[str]("recommendationId", recommendation_id)],
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookRecommendationsCommentsResponse],
            error_mapper=misc_facebook_get_recommendation_comments_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_get_recommendation_import_by_id(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsImportResponse, MiscFacebookGetRecommendationImportByIdErrorBody]:
        """Check the status, progress, and result of a single Facebook recommendations import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/import/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookRecommendationsImportResponse],
            error_mapper=misc_facebook_get_recommendation_import_by_id_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_get_recommendation_import_status(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsImportResponse1, MiscFacebookGetRecommendationImportStatusErrorBody]:
        """List Facebook recommendation import jobs for a team so you can monitor which imports are queued, running,
        finished, or failed.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/import"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookRecommendationsImportResponse1],
            error_mapper=misc_facebook_get_recommendation_import_status_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_get_recommendations(
        self,
        team_id: str,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsResponse, MiscFacebookGetRecommendationsErrorBody]:
        """List the Facebook Page recommendations pulled in by an import, with paging and your remaining import
        capacity. Use it to build a reputation-management inbox.

        Args:
            team_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations"),
            query_params=[
                param[str]("teamId", team_id),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookRecommendationsResponse],
            error_mapper=misc_facebook_get_recommendations_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_get_text_format_presets(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookTextFormatPresetsResponse, MiscFacebookGetTextFormatPresetsErrorBody]:
        """Return the text background presets (colored statuses) that can be passed as data.FACEBOOK.textFormatPresetId,
        grouped by whether each one renders as a flat color, a gradient, or an illustration. Facebook exposes no
        endpoint of its own for this, so read the list from here instead of hardcoding IDs. Any other numeric ID is also
        accepted and passed straight through to Facebook.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/text-format-presets"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookTextFormatPresetsResponse],
            error_mapper=misc_facebook_get_text_format_presets_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_get_token_debug(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookTokenDebugResponse, MiscFacebookGetTokenDebugErrorBody]:
        """Inspect a connected Facebook account's access token, including its scopes and expiry. Use it to diagnose
        permission errors when publishing fails.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/token-debug"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookTokenDebugResponse],
            error_mapper=misc_facebook_get_token_debug_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_import_recommendations(
        self,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsImportRequest | ApiV1MiscFacebookRecommendationsImportRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsImportResponse, MiscFacebookImportRecommendationsErrorBody]:
        """Kick off an asynchronous import that pulls recommendations left on your Facebook Page into bundle.social so
        you can read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscFacebookRecommendationsImportRequest | ApiV1MiscFacebookRecommendationsImportRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookRecommendationsImportResponse],
            error_mapper=misc_facebook_import_recommendations_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_reply_to_recommendation(
        self,
        recommendation_id: str,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsReplyRequest | ApiV1MiscFacebookRecommendationsReplyRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscFacebookRecommendationsReplyResponse, MiscFacebookReplyToRecommendationErrorBody]:
        """Publish a Page reply to a Facebook recommendation. Use it to respond to reviews programmatically instead of
        through Meta Business Suite.

        Args:
            recommendation_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/misc/facebook/recommendations/{recommendationId}/reply"),
            path_params=[param[str]("recommendationId", recommendation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscFacebookRecommendationsReplyRequest | ApiV1MiscFacebookRecommendationsReplyRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookRecommendationsReplyResponse],
            error_mapper=misc_facebook_reply_to_recommendation_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_reply_to_recommendation_comment(
        self,
        recommendation_id: str,
        comment_id: str,
        *,
        body: (
            ApiV1MiscFacebookRecommendationsCommentsReplyRequest
            | ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscFacebookRecommendationsCommentsReplyResponse, MiscFacebookReplyToRecommendationCommentErrorBody
    ]:
        """Publish a reply to a specific comment inside a Facebook recommendation thread.

        Args:
            recommendation_id: Value sent with the request.
            comment_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default(
                "/api/v1/misc/facebook/recommendations/{recommendationId}/comments/{commentId}/reply"
            ),
            path_params=[param[str]("recommendationId", recommendation_id), param[str]("commentId", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscFacebookRecommendationsCommentsReplyRequest
                    | ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookRecommendationsCommentsReplyResponse],
            error_mapper=misc_facebook_reply_to_recommendation_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_facebook_search_pages(
        self, team_id: str, q: str, *, limit: int | None = 10, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscFacebookPagesResponse, MiscFacebookSearchPagesErrorBody]:
        """Searches public Facebook Pages and returns IDs that can be inserted into Facebook Page mention tokens.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search Facebook Pages
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/facebook/pages"),
            query_params=[param[str]("teamId", team_id), param[str]("q", q), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscFacebookPagesResponse],
            error_mapper=misc_facebook_search_pages_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_add_media(
        self,
        *,
        body: ApiV1MiscGoogleBusinessMediaRequest | ApiV1MiscGoogleBusinessMediaRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessMediaResponse, MiscGoogleBusinessAddMediaErrorBody]:
        """Publish a photo or video to your Google Business Profile from a bundle.social upload, tagged with a category
        such as exterior, interior, or product. Fresh photos are a local ranking and conversion signal.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/google-business/media"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscGoogleBusinessMediaRequest | ApiV1MiscGoogleBusinessMediaRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessMediaResponse],
            error_mapper=misc_google_business_add_media_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_create_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, MiscGoogleBusinessCreatePlaceActionLinkErrorBody
    ]:
        """Add an action link such as Book, Order online, or Reserve to your Google Business Profile so customers can
        convert straight from the listing.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/google-business/location/place-action-links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest
                    | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1],
            error_mapper=misc_google_business_create_place_action_link_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_delete_media(
        self,
        *,
        body: ApiV1MiscGoogleBusinessMediaRequest1 | ApiV1MiscGoogleBusinessMediaRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessMediaResponse2, MiscGoogleBusinessDeleteMediaErrorBody]:
        """Remove a photo or video from your Google Business Profile.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/google-business/media"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscGoogleBusinessMediaRequest1 | ApiV1MiscGoogleBusinessMediaRequest1Dict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessMediaResponse2],
            error_mapper=misc_google_business_delete_media_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_delete_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3, MiscGoogleBusinessDeletePlaceActionLinkErrorBody
    ]:
        """Remove an action link from your Google Business Profile, for example when a booking URL is retired.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/google-business/location/place-action-links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2
                    | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Dict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3],
            error_mapper=misc_google_business_delete_place_action_link_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_delete_post(
        self,
        *,
        body: ApiV1MiscGoogleBusinessPostRequest | ApiV1MiscGoogleBusinessPostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessPostResponse, MiscGoogleBusinessDeletePostErrorBody]:
        """Permanently delete a published Google Business post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/google-business/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscGoogleBusinessPostRequest | ApiV1MiscGoogleBusinessPostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessPostResponse],
            error_mapper=misc_google_business_delete_post_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_delete_review_reply(
        self,
        review_id: str,
        *,
        body: (
            ApiV1MiscGoogleBusinessReviewsReplyRequest1 | ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsReplyResponse, MiscGoogleBusinessDeleteReviewReplyErrorBody]:
        """Remove your owner reply from a Google Review, leaving the customer's review in place.

        Args:
            review_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/{reviewId}/reply"),
            path_params=[param[str]("reviewId", review_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscGoogleBusinessReviewsReplyRequest1 | ApiV1MiscGoogleBusinessReviewsReplyRequest1Dict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessReviewsReplyResponse],
            error_mapper=misc_google_business_delete_review_reply_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_get_attributes(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationAttributesResponse, MiscGoogleBusinessGetAttributesErrorBody]:
        """Retrieve the attributes currently set on your Google Business Profile location, such as accessibility,
        payment options, or amenities.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/attributes"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationAttributesResponse],
            error_mapper=misc_google_business_get_attributes_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_get_food_menus(
        self,
        team_id: str,
        *,
        fields: list[Field3OrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationFoodMenusResponse, MiscGoogleBusinessGetFoodMenusErrorBody]:
        """Use typed query param ``fields``. Supports both comma-separated values (``fields=name,menus``) and repeated
        params (``fields=name&fields=menus``).

        Args:
            team_id: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/food-menus"),
            query_params=[param[str]("teamId", team_id), param[list[Field3OrStr] | None]("fields", fields)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationFoodMenusResponse],
            error_mapper=misc_google_business_get_food_menus_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_get_location(
        self,
        team_id: str,
        *,
        fields: list[FieldBundleSocialMiscApiOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationResponse, MiscGoogleBusinessGetLocationErrorBody]:
        """Use typed query param ``fields``. Supports both comma-separated values (``fields=name,title``) and repeated
        params (``fields=name&fields=title``).

        Args:
            team_id: Value sent with the request.
            fields: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location"),
            query_params=[
                param[str]("teamId", team_id), param[list[FieldBundleSocialMiscApiOrStr] | None]("fields", fields)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationResponse],
            error_mapper=misc_google_business_get_location_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_get_review_by_id(
        self, review_id: str, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsResponse1, MiscGoogleBusinessGetReviewByIdErrorBody]:
        """Retrieve one imported Google Review with its star rating, text, reviewer, and any existing owner reply.

        Args:
            review_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/{reviewId}"),
            path_params=[param[str]("reviewId", review_id)],
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessReviewsResponse1],
            error_mapper=misc_google_business_get_review_by_id_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_get_review_import_by_id(
        self, import_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsImportResponse, MiscGoogleBusinessGetReviewImportByIdErrorBody]:
        """Check the status, progress, and result of a single Google Reviews import job.

        Args:
            import_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/import/{importId}"),
            path_params=[param[str]("importId", import_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessReviewsImportResponse],
            error_mapper=misc_google_business_get_review_import_by_id_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_get_review_import_status(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsImportResponse1, MiscGoogleBusinessGetReviewImportStatusErrorBody]:
        """List Google Review import jobs for a team so you can monitor which imports are queued, running, finished, or
        failed.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/import"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessReviewsImportResponse1],
            error_mapper=misc_google_business_get_review_import_status_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_get_reviews(
        self,
        team_id: str,
        *,
        limit: float | None = 50.0,
        offset: float | None = 0.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsResponse, MiscGoogleBusinessGetReviewsErrorBody]:
        """List the Google Reviews pulled in by an import, with paging and your remaining import capacity. Use it to
        build a review inbox or monitor rating trends.

        Args:
            team_id: Value sent with the request.
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/reviews"),
            query_params=[
                param[str]("teamId", team_id),
                param[float | None]("limit", limit),
                param[float | None]("offset", offset),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessReviewsResponse],
            error_mapper=misc_google_business_get_reviews_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_get_service_list(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationServiceListResponse, MiscGoogleBusinessGetServiceListErrorBody]:
        """Retrieve the services listed on your Google Business Profile, including custom services and prices.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/service-list"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationServiceListResponse],
            error_mapper=misc_google_business_get_service_list_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_import_reviews(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessReviewsImportRequest | ApiV1MiscGoogleBusinessReviewsImportRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsImportResponse, MiscGoogleBusinessImportReviewsErrorBody]:
        """Kick off an asynchronous import that pulls your Google Business Profile reviews into bundle.social so you can
        read and reply to them through the API.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/import"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscGoogleBusinessReviewsImportRequest | ApiV1MiscGoogleBusinessReviewsImportRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessReviewsImportResponse],
            error_mapper=misc_google_business_import_reviews_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_list_available_attributes(
        self,
        team_id: str,
        *,
        language_code: str | None = None,
        region_code: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse, MiscGoogleBusinessListAvailableAttributesErrorBody
    ]:
        """List the attributes Google allows for your location's category and country. Check this before updating
        attributes, since the valid set differs per business category. ``regionCode``/``languageCode`` are honoured by
        looking the attributes up through the location's primary category; when that category or a region code cannot be
        resolved (common for service-area businesses with no storefront address) the location's own defaults are
        returned instead and ``lookup.by`` comes back as ``location``, meaning those two parameters were not applied.

        Args:
            team_id: Value sent with the request.
            language_code: Value sent with the request.
            region_code: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/attributes/available"),
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("languageCode", language_code),
                param[str | None]("regionCode", region_code),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse],
            error_mapper=misc_google_business_list_available_attributes_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_list_categories(
        self,
        team_id: str,
        region_code: str,
        language_code: str,
        *,
        names: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = 50,
        page_token: str | None = None,
        view: ViewOrStr | None = View.BASIC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse, MiscGoogleBusinessListCategoriesErrorBody
    ]:
        """Requires ``regionCode`` and ``languageCode``. Default ``view=BASIC``. Optional ``names`` fetches exact
        category IDs through ``categories:batchGet``; otherwise ``filter`` supports ``displayName`` prefix search.

        Args:
            team_id: Value sent with the request.
            region_code: Value sent with the request.
            language_code: Value sent with the request.
            names: Value sent with the request.
            filter_: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            view: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/categories/available"),
            query_params=[
                param[str]("teamId", team_id),
                param[str]("regionCode", region_code),
                param[str]("languageCode", language_code),
                param[list[str] | None]("names", names),
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[ViewOrStr | None]("view", view),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse],
            error_mapper=misc_google_business_list_categories_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_list_media(
        self,
        team_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessMediaResponse1, MiscGoogleBusinessListMediaErrorBody]:
        """List the photos and videos on your Google Business Profile, with paging. Use it to audit which images are
        live before adding or removing media.

        Args:
            team_id: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/media"),
            query_params=[
                param[str]("teamId", team_id),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessMediaResponse1],
            error_mapper=misc_google_business_list_media_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_list_place_action_links(
        self,
        team_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse, MiscGoogleBusinessListPlaceActionLinksErrorBody
    ]:
        """List the action links on your Google Business Profile, such as booking, ordering, or reservation URLs.

        Args:
            team_id: Value sent with the request.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/place-action-links"),
            query_params=[
                param[str]("teamId", team_id),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse],
            error_mapper=misc_google_business_list_place_action_links_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_list_search_keywords(
        self,
        team_id: str,
        start_month: str,
        end_month: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse, MiscGoogleBusinessListSearchKeywordsErrorBody
    ]:
        """Monthly search keyword impressions for your selected location. ``startMonth``/``endMonth`` are inclusive
        ``YYYY-MM`` values; counts are aggregated across the whole range, so request a single month for a per-month
        figure. Each keyword returns either an exact ``value`` or a ``threshold``, meaning the real count is below that
        number: low-volume keywords are only ever reported as a threshold, so treat a null ``value`` as suppressed
        rather than zero. Counts are unique users, not raw impressions. Paginated with ``pageToken``/``nextPageToken``,
        max ``pageSize`` 100.

        Args:
            team_id: Value sent with the request.
            start_month: Month in ``YYYY-MM`` format, inclusive.
            end_month: Month in ``YYYY-MM`` format, inclusive.
            page_size: Value sent with the request.
            page_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/google-business/location/search-keywords"),
            query_params=[
                param[str]("teamId", team_id),
                param[str]("startMonth", start_month),
                param[str]("endMonth", end_month),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse],
            error_mapper=misc_google_business_list_search_keywords_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_reply_to_review(
        self,
        review_id: str,
        *,
        body: ApiV1MiscGoogleBusinessReviewsReplyRequest | ApiV1MiscGoogleBusinessReviewsReplyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessReviewsReplyResponse, MiscGoogleBusinessReplyToReviewErrorBody]:
        """Publish or update the owner reply on a Google Review. Google allows one owner reply per review, so sending
        again overwrites the previous text.

        Args:
            review_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/misc/google-business/reviews/{reviewId}/reply"),
            path_params=[param[str]("reviewId", review_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscGoogleBusinessReviewsReplyRequest | ApiV1MiscGoogleBusinessReviewsReplyRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessReviewsReplyResponse],
            error_mapper=misc_google_business_reply_to_review_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_update_attributes(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationAttributesRequest
            | ApiV1MiscGoogleBusinessLocationAttributesRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationAttributesResponse, MiscGoogleBusinessUpdateAttributesErrorBody]:
        """Set or change attributes on your Google Business Profile location. Complete attributes help your listing
        surface for more specific local searches.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location/attributes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationAttributesRequest
                    | ApiV1MiscGoogleBusinessLocationAttributesRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationAttributesResponse],
            error_mapper=misc_google_business_update_attributes_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_update_food_menus(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationFoodMenusRequest | ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationFoodMenusResponse, MiscGoogleBusinessUpdateFoodMenusErrorBody]:
        """Body requires ``fields`` (``menus``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location/food-menus"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationFoodMenusRequest
                    | ApiV1MiscGoogleBusinessLocationFoodMenusRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationFoodMenusResponse],
            error_mapper=misc_google_business_update_food_menus_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_update_hours(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationHoursRequest | ApiV1MiscGoogleBusinessLocationHoursRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationHoursResponse, MiscGoogleBusinessUpdateHoursErrorBody]:
        """Body requires ``fields`` (``regularHours``, ``specialHours``, ``moreHours``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location/hours"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscGoogleBusinessLocationHoursRequest | ApiV1MiscGoogleBusinessLocationHoursRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationHoursResponse],
            error_mapper=misc_google_business_update_hours_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_update_location(
        self,
        *,
        body: ApiV1MiscGoogleBusinessLocationRequest | ApiV1MiscGoogleBusinessLocationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationResponse, MiscGoogleBusinessUpdateLocationErrorBody]:
        """Field mask is derived automatically from provided fields.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscGoogleBusinessLocationRequest | ApiV1MiscGoogleBusinessLocationRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationResponse],
            error_mapper=misc_google_business_update_location_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_update_place_action_link(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1
            | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, MiscGoogleBusinessUpdatePlaceActionLinkErrorBody
    ]:
        """Body requires ``fields`` (``uri``, ``placeActionType``, ``isPreferred``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location/place-action-links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1
                    | ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Dict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1],
            error_mapper=misc_google_business_update_place_action_link_error_mapper,
            request_options=request_options,
        )

    async def misc_google_business_update_service_list(
        self,
        *,
        body: (
            ApiV1MiscGoogleBusinessLocationServiceListRequest
            | ApiV1MiscGoogleBusinessLocationServiceListRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscGoogleBusinessLocationServiceListResponse, MiscGoogleBusinessUpdateServiceListErrorBody]:
        """Body requires ``fields`` (``serviceItems``).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/google-business/location/service-list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1MiscGoogleBusinessLocationServiceListRequest
                    | ApiV1MiscGoogleBusinessLocationServiceListRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscGoogleBusinessLocationServiceListResponse],
            error_mapper=misc_google_business_update_service_list_error_mapper,
            request_options=request_options,
        )

    async def misc_instagram_business_discovery(
        self, team_id: str, username: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscInstagramTagsResponse, MiscInstagramBusinessDiscoveryErrorBody]:
        """Checks if an Instagram user exists and returns their public profile data. Only works for Business and Creator
        accounts and only when Instagram is connected via Facebook Login. Returns followers_count, media_count, and
        profile picture if available.

        Args:
            team_id: Value sent with the request.
            username: Instagram username to search for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/instagram/tags"),
            query_params=[param[str]("teamId", team_id), param[str]("username", username)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscInstagramTagsResponse],
            error_mapper=misc_instagram_business_discovery_error_mapper,
            request_options=request_options,
        )

    async def misc_instagram_delete_comment(
        self,
        *,
        body: ApiV1MiscInstagramCommentRequest | ApiV1MiscInstagramCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscInstagramCommentResponse, MiscInstagramDeleteCommentErrorBody]:
        """Permanently delete a published Instagram comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/instagram/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscInstagramCommentRequest | ApiV1MiscInstagramCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscInstagramCommentResponse],
            error_mapper=misc_instagram_delete_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_instagram_search_audio(
        self,
        team_id: str,
        audio_type: AudioTypeOrStr,
        *,
        search_query: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscInstagramAudioResponse, MiscInstagramSearchAudioErrorBody]:
        """Searches Instagram music or original sounds that can be attached to Reels. Only works for Instagram accounts
        connected via Facebook Login.

        Args:
            team_id: Value sent with the request.
            audio_type: The type of Instagram audio to search for.
            search_query: Optional keyword search query.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/instagram/audio"),
            query_params=[
                param[str]("teamId", team_id),
                param[AudioTypeOrStr]("audioType", audio_type),
                param[str | None]("searchQuery", search_query),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscInstagramAudioResponse],
            error_mapper=misc_instagram_search_audio_error_mapper,
            request_options=request_options,
        )

    async def misc_instagram_search_locations(
        self, team_id: str, q: str, *, limit: int | None = 10, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscInstagramLocationsResponse, MiscInstagramSearchLocationsErrorBody]:
        """Searches Facebook Pages with physical location data and returns IDs that can be used as
        data.INSTAGRAM.locationId.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search location pages
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/instagram/locations"),
            query_params=[param[str]("teamId", team_id), param[str]("q", q), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscInstagramLocationsResponse],
            error_mapper=misc_instagram_search_locations_error_mapper,
            request_options=request_options,
        )

    async def misc_linkedin_build_commentary(
        self,
        *,
        body: ApiV1MiscLinkedinMentionsBuilderRequest | ApiV1MiscLinkedinMentionsBuilderRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinMentionsBuilderResponse, MiscLinkedinBuildCommentaryErrorBody]:
        """If tag already exists (case insensitive), mentions replace it; otherwise they're appended to the end.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/linkedin/mentions/builder"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1MiscLinkedinMentionsBuilderRequest | ApiV1MiscLinkedinMentionsBuilderRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscLinkedinMentionsBuilderResponse],
            error_mapper=misc_linkedin_build_commentary_error_mapper,
            request_options=request_options,
        )

    async def misc_linkedin_delete_comment(
        self,
        *,
        body: ApiV1MiscLinkedinCommentRequest1 | ApiV1MiscLinkedinCommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinCommentResponse1, MiscLinkedinDeleteCommentErrorBody]:
        """Permanently delete a published LinkedIn comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/linkedin/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscLinkedinCommentRequest1 | ApiV1MiscLinkedinCommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscLinkedinCommentResponse1],
            error_mapper=misc_linkedin_delete_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_linkedin_delete_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostRequest1 | ApiV1MiscLinkedinPostRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinPostResponse1, MiscLinkedinDeletePostErrorBody]:
        """Permanently delete a published LinkedIn post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/linkedin/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscLinkedinPostRequest1 | ApiV1MiscLinkedinPostRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscLinkedinPostResponse1],
            error_mapper=misc_linkedin_delete_post_error_mapper,
            request_options=request_options,
        )

    async def misc_linkedin_edit_comment(
        self,
        *,
        body: ApiV1MiscLinkedinCommentRequest | ApiV1MiscLinkedinCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinCommentResponse, MiscLinkedinEditCommentErrorBody]:
        """Update the text content of a published LinkedIn comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/linkedin/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscLinkedinCommentRequest | ApiV1MiscLinkedinCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscLinkedinCommentResponse],
            error_mapper=misc_linkedin_edit_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_linkedin_edit_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostRequest | ApiV1MiscLinkedinPostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinPostResponse, MiscLinkedinEditPostErrorBody]:
        """Update the text content of a published LinkedIn post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/linkedin/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscLinkedinPostRequest | ApiV1MiscLinkedinPostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscLinkedinPostResponse],
            error_mapper=misc_linkedin_edit_post_error_mapper,
            request_options=request_options,
        )

    async def misc_linkedin_get_tags(
        self,
        team_id: str,
        *,
        q: str | None = None,
        url: str | None = None,
        display_name: str | None = None,
        scope: ScopeOrStr | None = Scope.ALL,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinMentionsTagsResponse, MiscLinkedinGetTagsErrorBody]:
        """Search for LinkedIn people and organizations that can be @-mentioned, and get the tag IDs needed to insert
        them into post text. LinkedIn only renders a mention when the display text matches the entity's name exactly
        (case sensitive), so a vanity slug never works. When a person is resolved from ``url`` but LinkedIn does not
        expose their name, the tag comes back with an empty ``display`` and ``needsDisplayName: true`` — pass
        ``displayName`` to set it. Note that a page can only mention its own followers.

        Args:
            team_id: Value sent with the request.
            q: Value sent with the request.
            url: Value sent with the request.
            display_name: Value sent with the request.
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/linkedin/mentions/tags"),
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("q", q),
                param[str | None]("url", url),
                param[str | None]("displayName", display_name),
                param[ScopeOrStr | None]("scope", scope),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscLinkedinMentionsTagsResponse],
            error_mapper=misc_linkedin_get_tags_error_mapper,
            request_options=request_options,
        )

    async def misc_linkedin_reshare_post(
        self,
        *,
        body: ApiV1MiscLinkedinPostReshareRequest | ApiV1MiscLinkedinPostReshareRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscLinkedinPostReshareResponse, MiscLinkedinResharePostErrorBody]:
        """Create a LinkedIn reshare as the currently selected LinkedIn channel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/linkedin/post/reshare"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscLinkedinPostReshareRequest | ApiV1MiscLinkedinPostReshareRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscLinkedinPostReshareResponse],
            error_mapper=misc_linkedin_reshare_post_error_mapper,
            request_options=request_options,
        )

    async def misc_mastodon_delete_comment(
        self,
        *,
        body: ApiV1MiscMastodonCommentRequest1 | ApiV1MiscMastodonCommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscMastodonCommentResponse1, MiscMastodonDeleteCommentErrorBody]:
        """Permanently delete a published Mastodon reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/mastodon/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscMastodonCommentRequest1 | ApiV1MiscMastodonCommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscMastodonCommentResponse1],
            error_mapper=misc_mastodon_delete_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_mastodon_delete_status(
        self,
        *,
        body: ApiV1MiscMastodonStatusRequest1 | ApiV1MiscMastodonStatusRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscMastodonStatusResponse1, MiscMastodonDeleteStatusErrorBody]:
        """Permanently delete a published Mastodon status.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/mastodon/status"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscMastodonStatusRequest1 | ApiV1MiscMastodonStatusRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscMastodonStatusResponse1],
            error_mapper=misc_mastodon_delete_status_error_mapper,
            request_options=request_options,
        )

    async def misc_mastodon_edit_comment(
        self,
        *,
        body: ApiV1MiscMastodonCommentRequest | ApiV1MiscMastodonCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscMastodonCommentResponse, MiscMastodonEditCommentErrorBody]:
        """Update the text content of a published Mastodon reply/comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/mastodon/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscMastodonCommentRequest | ApiV1MiscMastodonCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscMastodonCommentResponse],
            error_mapper=misc_mastodon_edit_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_mastodon_edit_status(
        self,
        *,
        body: ApiV1MiscMastodonStatusRequest | ApiV1MiscMastodonStatusRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscMastodonStatusResponse, MiscMastodonEditStatusErrorBody]:
        """Update the text content and spoiler text of a published Mastodon status.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/mastodon/status"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscMastodonStatusRequest | ApiV1MiscMastodonStatusRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscMastodonStatusResponse],
            error_mapper=misc_mastodon_edit_status_error_mapper,
            request_options=request_options,
        )

    async def misc_pinterest_delete_pin(
        self,
        *,
        body: ApiV1MiscPinterestPinRequest1 | ApiV1MiscPinterestPinRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscPinterestPinResponse1, MiscPinterestDeletePinErrorBody]:
        """Permanently delete a published Pinterest pin.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/pinterest/pin"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscPinterestPinRequest1 | ApiV1MiscPinterestPinRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscPinterestPinResponse1],
            error_mapper=misc_pinterest_delete_pin_error_mapper,
            request_options=request_options,
        )

    async def misc_pinterest_edit_pin(
        self,
        *,
        body: ApiV1MiscPinterestPinRequest | ApiV1MiscPinterestPinRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscPinterestPinResponse, MiscPinterestEditPinErrorBody]:
        """Temporarily disabled

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/pinterest/pin"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscPinterestPinRequest | ApiV1MiscPinterestPinRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscPinterestPinResponse],
            error_mapper=misc_pinterest_edit_pin_error_mapper,
            request_options=request_options,
        )

    async def misc_reddit_delete_comment(
        self,
        *,
        body: ApiV1MiscRedditCommentRequest1 | ApiV1MiscRedditCommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscRedditCommentResponse1, MiscRedditDeleteCommentErrorBody]:
        """Permanently delete a published Reddit comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/reddit/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscRedditCommentRequest1 | ApiV1MiscRedditCommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscRedditCommentResponse1],
            error_mapper=misc_reddit_delete_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_reddit_delete_post(
        self,
        *,
        body: ApiV1MiscRedditPostRequest1 | ApiV1MiscRedditPostRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscRedditPostResponse1, MiscRedditDeletePostErrorBody]:
        """Permanently delete a published Reddit post.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/reddit/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscRedditPostRequest1 | ApiV1MiscRedditPostRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscRedditPostResponse1],
            error_mapper=misc_reddit_delete_post_error_mapper,
            request_options=request_options,
        )

    async def misc_reddit_edit_comment(
        self,
        *,
        body: ApiV1MiscRedditCommentRequest | ApiV1MiscRedditCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscRedditCommentResponse, MiscRedditEditCommentErrorBody]:
        """Update the text content of a published Reddit comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/reddit/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscRedditCommentRequest | ApiV1MiscRedditCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscRedditCommentResponse],
            error_mapper=misc_reddit_edit_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_reddit_edit_post(
        self,
        *,
        body: ApiV1MiscRedditPostRequest | ApiV1MiscRedditPostRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscRedditPostResponse, MiscRedditEditPostErrorBody]:
        """Update the selftext content of a published Reddit text post. Link and media posts cannot be edited.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/reddit/post"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscRedditPostRequest | ApiV1MiscRedditPostRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscRedditPostResponse],
            error_mapper=misc_reddit_edit_post_error_mapper,
            request_options=request_options,
        )

    async def misc_reddit_get_post_requirements(
        self, team_id: str, subreddit: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscRedditPostRequirementsResponse, MiscRedditGetPostRequirementsErrorBody]:
        """Check a subreddit's posting rules before publishing, including whether flair is enabled or mandatory. Call
        this first to avoid rejected submissions.

        Args:
            team_id: Value sent with the request.
            subreddit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/reddit/post-requirements"),
            query_params=[param[str]("teamId", team_id), param[str]("subreddit", subreddit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscRedditPostRequirementsResponse],
            error_mapper=misc_reddit_get_post_requirements_error_mapper,
            request_options=request_options,
        )

    async def misc_reddit_get_subreddit_flairs(
        self, team_id: str, subreddit: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[ApiV1MiscRedditSubredditFlairsResponse], MiscRedditGetSubredditFlairsErrorBody]:
        """List the flairs available in a subreddit so you can attach a valid flair ID when creating a Reddit post.

        Args:
            team_id: Value sent with the request.
            subreddit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/reddit/subreddit-flairs"),
            query_params=[param[str]("teamId", team_id), param[str]("subreddit", subreddit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[ApiV1MiscRedditSubredditFlairsResponse]],
            error_mapper=misc_reddit_get_subreddit_flairs_error_mapper,
            request_options=request_options,
        )

    async def misc_slack_delete_message(
        self,
        *,
        body: ApiV1MiscSlackMessageRequest1 | ApiV1MiscSlackMessageRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscSlackMessageResponse1, MiscSlackDeleteMessageErrorBody]:
        """Permanently delete a published Slack message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/slack/message"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscSlackMessageRequest1 | ApiV1MiscSlackMessageRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscSlackMessageResponse1],
            error_mapper=misc_slack_delete_message_error_mapper,
            request_options=request_options,
        )

    async def misc_slack_edit_message(
        self,
        *,
        body: ApiV1MiscSlackMessageRequest | ApiV1MiscSlackMessageRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscSlackMessageResponse, MiscSlackEditMessageErrorBody]:
        """Update the text content of a published Slack message.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/slack/message"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscSlackMessageRequest | ApiV1MiscSlackMessageRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscSlackMessageResponse],
            error_mapper=misc_slack_edit_message_error_mapper,
            request_options=request_options,
        )

    async def misc_tiktok_delete_comment(
        self,
        *,
        body: ApiV1MiscTiktokCommentRequest | ApiV1MiscTiktokCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscTiktokCommentResponse, MiscTiktokDeleteCommentErrorBody]:
        """Delete a published TikTok comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/tiktok/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscTiktokCommentRequest | ApiV1MiscTiktokCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscTiktokCommentResponse],
            error_mapper=misc_tiktok_delete_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_tiktok_get_commercial_music_trending_list(
        self,
        team_id: str,
        *,
        genre: GenreOrStr | None = Genre.POP,
        date_range: DateRangeOrStr | None = DateRange._7_DAY,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ApiV1MiscTiktokCmlTrendingListResponse], MiscTiktokGetCommercialMusicTrendingListErrorBody]:
        """Retrieve up to 100 popular tracks pre-cleared for organic content and ad creation from TikTok CML.

        Args:
            team_id: Value sent with the request.
            genre: Genre filter for commercial music results.
            date_range: Timeframe for popular tracks ranking.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/tiktok/cml/trending-list"),
            query_params=[
                param[str]("teamId", team_id),
                param[GenreOrStr | None]("genre", genre),
                param[DateRangeOrStr | None]("dateRange", date_range),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[ApiV1MiscTiktokCmlTrendingListResponse]],
            error_mapper=misc_tiktok_get_commercial_music_trending_list_error_mapper,
            request_options=request_options,
        )

    async def misc_tiktok_get_post_settings(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscTiktokPostSettingsResponse, MiscTiktokGetPostSettingsErrorBody]:
        """Returns the privacy levels, interaction settings (comments, duet, stitch) and maximum video duration the
        connected TikTok account allows, read live from TikTok. A value the account does not allow is not rejected when
        you create the post, it fails at publish time with TT:40002. Use it to build the options of your own composer,
        not as a check before every publish: each call counts against the account's TikTok rate limit.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/tiktok/post-settings"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscTiktokPostSettingsResponse],
            error_mapper=misc_tiktok_get_post_settings_error_mapper,
            request_options=request_options,
        )

    async def misc_tiktok_search_locations(
        self, team_id: str, q: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscTiktokLocationsResponse, MiscTiktokSearchLocationsErrorBody]:
        """Searches location tags available to the connected TikTok account (up to 20 results). Pass ``locationId`` and
        ``name`` as data.TIKTOK.locationId and data.TIKTOK.locationName to show the location on a video or photo post.

        Args:
            team_id: Value sent with the request.
            q: Free-text query used to search TikTok location tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/tiktok/locations"),
            query_params=[param[str]("teamId", team_id), param[str]("q", q)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscTiktokLocationsResponse],
            error_mapper=misc_tiktok_search_locations_error_mapper,
            request_options=request_options,
        )

    async def misc_twitter_delete_comment(
        self,
        *,
        body: ApiV1MiscTwitterCommentRequest | ApiV1MiscTwitterCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscTwitterCommentResponse, MiscTwitterDeleteCommentErrorBody]:
        """Permanently delete a published Twitter/X reply/comment. X charges for deletes ($0.01 per request).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/twitter/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscTwitterCommentRequest | ApiV1MiscTwitterCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscTwitterCommentResponse],
            error_mapper=misc_twitter_delete_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_twitter_delete_tweet(
        self,
        *,
        body: ApiV1MiscTwitterTweetRequest | ApiV1MiscTwitterTweetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscTwitterTweetResponse, MiscTwitterDeleteTweetErrorBody]:
        """Permanently delete a published Twitter/X tweet. X charges for deletes ($0.01 per request).

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/twitter/tweet"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscTwitterTweetRequest | ApiV1MiscTwitterTweetRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscTwitterTweetResponse],
            error_mapper=misc_twitter_delete_tweet_error_mapper,
            request_options=request_options,
        )

    async def misc_twitter_retweet(
        self,
        *,
        body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscTwitterRetweetResponse, MiscTwitterRetweetErrorBody]:
        """Repost (retweet) any X post from the connected account. X charges for reposts ($0.015 per request); your
        credits are charged once per post, per connected account, per UTC day, so reposting the same post again on the
        same day costs no extra credit. Reposting a post that is already reposted is a no-op on X's side.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/twitter/retweet"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscTwitterRetweetResponse],
            error_mapper=misc_twitter_retweet_error_mapper,
            request_options=request_options,
        )

    async def misc_twitter_unretweet(
        self,
        *,
        body: ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscTwitterRetweetResponse, MiscTwitterUnretweetErrorBody]:
        """Remove a repost (retweet) made by the connected account. X charges for this too ($0.01 per request); your
        credits are charged once per post, per connected account, per UTC day, the same way reposting is.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/twitter/retweet"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscTwitterRetweetRequest | ApiV1MiscTwitterRetweetRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscTwitterRetweetResponse],
            error_mapper=misc_twitter_unretweet_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_add_video_to_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistItemsRequest | ApiV1MiscYoutubePlaylistItemsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubePlaylistItemsResponse, MiscYoutubeAddVideoToPlaylistErrorBody]:
        """Append a video to a YouTube playlist on a connected channel.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/youtube/playlist-items"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubePlaylistItemsRequest | ApiV1MiscYoutubePlaylistItemsRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubePlaylistItemsResponse],
            error_mapper=misc_youtube_add_video_to_playlist_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_create_new_channel_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistRequest | ApiV1MiscYoutubePlaylistRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubePlaylistResponse1, MiscYoutubeCreateNewChannelPlaylistErrorBody]:
        """Create a playlist on a connected YouTube channel with a title, description, and privacy status. Playlists
        group related videos and increase session watch time.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/youtube/playlist"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubePlaylistRequest | ApiV1MiscYoutubePlaylistRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubePlaylistResponse1],
            error_mapper=misc_youtube_create_new_channel_playlist_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_delete_channel_playlist(
        self, playlist_id: str, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[bool, MiscYoutubeDeleteChannelPlaylistErrorBody]:
        """Permanently delete a playlist from a connected YouTube channel. The videos themselves are not deleted.

        Args:
            playlist_id: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/youtube/playlist/{playlistId}"),
            path_params=[param[str]("playlistId", playlist_id)],
            query_params=[param[str]("teamId", team_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[bool],
            error_mapper=misc_youtube_delete_channel_playlist_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_delete_comment(
        self,
        *,
        body: ApiV1MiscYoutubeCommentRequest1 | ApiV1MiscYoutubeCommentRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubeCommentResponse1, MiscYoutubeDeleteCommentErrorBody]:
        """Permanently delete a published YouTube comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/youtube/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubeCommentRequest1 | ApiV1MiscYoutubeCommentRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubeCommentResponse1],
            error_mapper=misc_youtube_delete_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_delete_video(
        self,
        *,
        body: ApiV1MiscYoutubeVideoRequest1 | ApiV1MiscYoutubeVideoRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubeVideoResponse1, MiscYoutubeDeleteVideoErrorBody]:
        """Permanently delete a published YouTube video.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/youtube/video"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubeVideoRequest1 | ApiV1MiscYoutubeVideoRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubeVideoResponse1],
            error_mapper=misc_youtube_delete_video_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_delete_video_from_playlist(
        self, playlist_item_id: str, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[bool, MiscYoutubeDeleteVideoFromPlaylistErrorBody]:
        """Remove a single video from a YouTube playlist. Pass the playlist item ID, not the video ID. The video itself
        stays on the channel.

        Args:
            playlist_item_id: Playlist item ID (not video ID)
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/misc/youtube/playlist-items/{playlistItemId}"),
            path_params=[param[str]("playlistItemId", playlist_item_id)],
            query_params=[param[str]("teamId", team_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[bool],
            error_mapper=misc_youtube_delete_video_from_playlist_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_edit_comment(
        self,
        *,
        body: ApiV1MiscYoutubeCommentRequest | ApiV1MiscYoutubeCommentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubeCommentResponse, MiscYoutubeEditCommentErrorBody]:
        """Update the text content of a published YouTube comment.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/youtube/comment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubeCommentRequest | ApiV1MiscYoutubeCommentRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubeCommentResponse],
            error_mapper=misc_youtube_edit_comment_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_edit_video(
        self,
        *,
        body: ApiV1MiscYoutubeVideoRequest | ApiV1MiscYoutubeVideoRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubeVideoResponse, MiscYoutubeEditVideoErrorBody]:
        """Update the title, description, tags, category, or privacy status of a published YouTube video.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/misc/youtube/video"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubeVideoRequest | ApiV1MiscYoutubeVideoRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubeVideoResponse],
            error_mapper=misc_youtube_edit_video_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_get_channel_playlist(
        self, team_id: str, *, max_results: int | None = 10, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscYoutubePlaylistResponse, MiscYoutubeGetChannelPlaylistErrorBody]:
        """List the playlists on a connected YouTube channel, with their IDs, titles, and privacy status.

        Args:
            team_id: Value sent with the request.
            max_results: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/youtube/playlist"),
            query_params=[param[str]("teamId", team_id), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubePlaylistResponse],
            error_mapper=misc_youtube_get_channel_playlist_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_get_regions(
        self, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscYoutubeRegionsResponse, MiscYoutubeGetRegionsErrorBody]:
        """Retrieve the list of content regions that the YouTube website supports.

        Args:
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/youtube/regions"),
            query_params=[param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubeRegionsResponse],
            error_mapper=misc_youtube_get_regions_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_get_video_categories(
        self, team_id: str, *, region_code: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1MiscYoutubeVideoCategoriesResponse, MiscYoutubeGetVideoCategoriesErrorBody]:
        """Retrieve the list of video categories that can be associated with YouTube videos for a specific region.

        Args:
            team_id: Value sent with the request.
            region_code: ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'PL'). Defaults to 'US'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/youtube/video-categories"),
            query_params=[param[str]("teamId", team_id), param[str | None]("regionCode", region_code)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubeVideoCategoriesResponse],
            error_mapper=misc_youtube_get_video_categories_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_get_videos_from_playlist(
        self,
        team_id: str,
        playlist_id: str,
        *,
        max_results: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubePlaylistItemsResponse1, MiscYoutubeGetVideosFromPlaylistErrorBody]:
        """List the videos in a YouTube playlist, including the playlist item IDs required to remove individual entries.

        Args:
            team_id: Value sent with the request.
            playlist_id: Value sent with the request.
            max_results: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/misc/youtube/playlist-items"),
            query_params=[
                param[str]("teamId", team_id),
                param[str]("playlistId", playlist_id),
                param[int | None]("maxResults", max_results),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubePlaylistItemsResponse1],
            error_mapper=misc_youtube_get_videos_from_playlist_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_set_thumbnail(
        self,
        *,
        body: ApiV1MiscYoutubeThumbnailRequest | ApiV1MiscYoutubeThumbnailRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubeThumbnailResponse, MiscYoutubeSetThumbnailErrorBody]:
        """Upload a custom thumbnail for a published YouTube video. Custom thumbnails require a verified channel and
        strongly influence click-through rate.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/misc/youtube/thumbnail"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubeThumbnailRequest | ApiV1MiscYoutubeThumbnailRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubeThumbnailResponse],
            error_mapper=misc_youtube_set_thumbnail_error_mapper,
            request_options=request_options,
        )

    async def misc_youtube_update_channel_playlist(
        self,
        *,
        body: ApiV1MiscYoutubePlaylistRequest1 | ApiV1MiscYoutubePlaylistRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1MiscYoutubePlaylistResponse1, MiscYoutubeUpdateChannelPlaylistErrorBody]:
        """Change the title, description, or privacy status of a YouTube playlist on a connected channel. Send the
        playlist ID together with the fields you want to update.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/misc/youtube/playlist"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1MiscYoutubePlaylistRequest1 | ApiV1MiscYoutubePlaylistRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1MiscYoutubePlaylistResponse1],
            error_mapper=misc_youtube_update_channel_playlist_error_mapper,
            request_options=request_options,
        )
